# GitHub Branching Strategy

This repository follows a structured branching strategy to ensure efficient and organized development workflows. The strategy includes four main branches: `feature`, `dev`, `release`, and `main`.

## Branches Overview

1. **main**
   - The `main` branch holds the production-ready code.
   - Only stable and thoroughly tested code is merged into this branch.
   - Direct commits to this branch are restricted.

2. **dev**
   - The `dev` branch is the main development branch where features and fixes are integrated.
   - Developers branch off from `dev` to create `feature` branches.
   - Once a feature is complete and tested, it is merged back into the `dev` branch.

3. **release**
   - The `release` branch is used for preparing the code for production.
   - It branches off from `dev` when the code is ready for a release cycle.
   - Bug fixes and final adjustments are made here before merging into `main`.

4. **feature**
   - `feature` branches are used for developing new features or fixing bugs.
   - These branches are created from `dev`.
   - Once the work is complete, the `feature` branch is merged back into `dev`.

## Workflow

1. **Creating a Feature Branch**
   - Branch off from the `dev` branch:
     ```bash
     git checkout dev
     git pull origin dev
     git checkout -b feature/feature-name
     ```

2. **Working on the Feature**
   - Make commits to the `feature` branch as needed:
     ```bash
     git add .
     git commit -m "Description of work done"
     ```

3. **Merging the Feature Branch into Dev**
   - Once the feature is complete and tested, merge
