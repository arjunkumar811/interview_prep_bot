import fs from 'fs';
import path from 'path';

export class ContentService {
  private contentDir = path.resolve(__dirname, '../../content/lessons');

  /**
   * Reads a markdown file for the given moduleId and chunks it by `## ` headings.
   */
  public getLessonChunks(moduleId: string): string[] {
    const filePath = path.join(this.contentDir, `${moduleId}.md`);
    
    if (!fs.existsSync(filePath)) {
      return [];
    }

    const content = fs.readFileSync(filePath, 'utf8');

    // Split content by '---' to allow explicit pagination by the author
    const rawChunks = content.split(/^---$/m);

    return rawChunks
      .map(chunk => this.parseMarkdownToTelegramHtml(chunk.trim()))
      .filter(chunk => chunk.length > 0);
  }

  /**
   * Converts standard markdown into Telegram-supported HTML.
   * Telegram only supports <b>, <i>, <u>, <s>, <a>, <code>, <pre>.
   */
  private parseMarkdownToTelegramHtml(markdown: string): string {
    let html = markdown;

    // Escape HTML characters to prevent Telegram parsing errors
    html = html.replace(/&/g, '&amp;')
               .replace(/</g, '&lt;')
               .replace(/>/g, '&gt;');

    // Headings: # Heading -> <b>Heading</b>
    html = html.replace(/^#\s+(.*$)/gm, '<b>$1</b>');
    html = html.replace(/^##\s+(.*$)/gm, '<b>$1</b>');
    html = html.replace(/^###\s+(.*$)/gm, '<b>$1</b>');

    // Blockquotes: > text -> <blockquote>text</blockquote>
    html = html.replace(/^>\s+(.*$)/gm, '<blockquote>$1</blockquote>');

    // Bold: **text** -> <b>text</b>
    html = html.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');

    // Italic: *text* or _text_ -> <i>text</i>
    html = html.replace(/\b_(.*?)_\b/g, '<i>$1</i>');

    // Code block: ```lang\ncode\n``` -> <pre><code class="language-lang">code</code></pre>
    html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (match, lang, code) => {
      return `<pre><code class="language-${lang}">${code}</code></pre>`;
    });

    // Inline code: `code` -> <code>code</code>
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Unordered lists: - item or * item -> • item
    html = html.replace(/^[-*]\s+(.*$)/gm, '• $1');

    // Markdown tables: wrap in <pre><code> to preserve alignment on mobile
    html = html.replace(/(?:^\|.*(?:\n|$))+/gm, (match) => {
      return `<pre><code>${match.trim()}</code></pre>\n`;
    });

    return html;
  }
}

export const contentService = new ContentService();
