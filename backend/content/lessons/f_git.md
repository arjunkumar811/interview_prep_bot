## 🤔 What is Git?

Imagine writing a document and wanting to save every draft, ever — being able to jump back to "the version from 3 days ago" instantly, or see exactly what changed.

> **Git is a version control system that tracks changes to your code over time, letting multiple people collaborate without overwriting each other's work.**

**GitHub** is a cloud platform that hosts Git repositories online, adding collaboration features (pull requests, issues, actions).

```
Git    = the tool that tracks changes (works locally, offline)
GitHub = the website that hosts your Git repositories online
```

## The Three Areas

```
Working Directory  →  Staging Area  →  Repository (committed history)
   (your files)         (git add)         (git commit)
```

## Core Commands

```bash
git init                     # start tracking a new project
git status                   # see what's changed
git add file.js               # stage a specific file
git add .                     # stage everything
git commit -m "message"       # save a snapshot with a message
git log                       # view commit history
```

## Branching

A **branch** is an independent line of development — you can experiment without touching the main codebase.

```
main:      A───B───C
                 \
feature:          D───E
```

```bash
git branch feature/login       # create a branch
git checkout feature/login     # switch to it
git checkout -b feature/login  # create AND switch in one command
git merge feature/login        # merge it back into current branch
```

## Working with GitHub (Remote)

```bash
git remote add origin https://github.com/user/repo.git
git push origin main            # upload commits to GitHub
git pull origin main            # download + merge latest changes
git clone https://github.com/user/repo.git  # copy a repo to your machine
```

## Merge Conflicts

Happen when two branches change the **same line** of the same file.

```
<<<<<<< HEAD
const greeting = "Hello";
=======
const greeting = "Hi";
>>>>>>> feature/login
```
You manually choose (or combine) the correct version, then commit.

## Pull Requests (PRs)

A PR proposes merging your branch into another (usually `main`), letting teammates review the diff before it's merged.

```
Your Branch ──► Pull Request ──► Code Review ──► Approved ──► Merge into main
```

## `.gitignore`

Tells Git which files to never track (e.g. `node_modules`, `.env` secrets):
```
node_modules/
.env
dist/
```

## Useful Everyday Commands

```bash
git diff              # see exact line changes before committing
git stash             # temporarily save uncommitted changes
git reset --soft HEAD~1   # undo last commit, keep changes staged
git revert <commit>   # safely undo a commit by creating a new commit
```

## Common Interview Questions

**Q1. Difference between `git merge` and `git rebase`?**
`merge` combines branches and preserves full history with a merge commit; `rebase` replays your commits on top of another branch, creating a cleaner, linear history.

**Q2. What is a merge conflict, and how do you resolve it?**
It occurs when Git can't automatically combine changes to the same lines; you manually edit the conflicting sections and commit the resolved version.

**Q3. Difference between `git fetch` and `git pull`?**
`fetch` downloads changes from the remote but doesn't merge them; `pull` = `fetch` + `merge` in one step.

**Q4. What does `.gitignore` do?**
Lists files/folders Git should never track (e.g. secrets, dependencies, build output).

## 🧠 Mini Quiz

1. What's the difference between `git add` and `git commit`?
2. What is a branch used for?
3. What causes a merge conflict?
4. What's the purpose of a Pull Request?

---