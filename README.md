# Github Pages setup

- Git Deploy : Hosted on Github pages. Run `yarn run deploy`
- Git push : mutiple branches for each feature trials

## Start the project

Execute `yarn start` at the root of the project

# Known Bugs

- Collapse toggle is slower while closing
  - This is because of React rendering the classNames. Adding is instantaneous but removing requires re-rendering of the component.
