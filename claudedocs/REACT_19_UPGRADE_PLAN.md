# React 19.2 Upgrade Plan for VXTeaser

## Executive Summary

This document outlines the upgrade path from React 18 to React 19.2 for the VXTeaser library.

### Quick Facts
- **Target Version**: React 19.2.0
- **Current Version**: React 18.x (peer dependency)
- **Estimated Time**: 8-14 hours
- **Risk Level**: Medium-High (requires code refactoring)

### Critical Actions Required
⚠️ **MUST DO BEFORE UPGRADE:**
1. Replace `UNSAFE_componentWillReceiveProps` in `BannerSuite.js` and `TileSuite.js`
2. Test `React.cloneElement` usage in Provider components
3. Update Storybook to a version compatible with React 19

### Why Upgrade?
- Better performance and new features
- Improved developer experience
- Future-proofing the library
- Security and bug fixes

---

## Current State Analysis

### Current Versions
- **React**: ^18.0.0 (peer dependency)
- **React DOM**: ^18.0.0 (peer dependency)
- **Storybook**: 8.6.14
- **@testing-library/react**: ^16.2.0
- **@testing-library/jest-dom**: ^6.6.3
- **Jest**: ^29.7.0
- **Webpack**: ^5.97.1
- **Babel**: @babel/preset-react ^7.26.3

### Project Characteristics
- React library component project (peer dependency on React)
- Uses **class components** extensively (Banner, Provider, TileSuite, etc.)
- Builds UMD library for external consumption
- Has standalone build option
- Uses Storybook for documentation and testing
- Jest for unit testing

## Breaking Changes in React 19

### 1. **Class Components**
- React 19 continues to support class components with no breaking changes
- **Action Required**: None (your project uses class components extensively)

### 2. **PropTypes**
- PropTypes are now deprecated in React 19
- **Action Required**: Consider using TypeScript or keeping PropTypes for backwards compatibility
  - Option A: Keep PropTypes (will show deprecation warnings)
  - Option B: Remove PropTypes, rely on consumers to validate

### 3. **React.cloneElement**
- Minor changes in behavior
- **Action Required**: Review `src/components/Provider.js` line 56

### 4. **Ref API Changes**
- Forward refs behavior has updates
- **Action Required**: Test components that use refs

## Upgrade Steps

### Phase 1: Update Dependencies

#### 1.1 Update package.json
```json
"peerDependencies": {
  "react": "^19.2.0",
  "react-dom": "^19.2.0"
}
```

#### 1.2 Update Testing Libraries
- `@testing-library/react`: ^16.2.0 → ^16.0.0+ (verify compatibility)
- `jest-environment-jsdom`: Verify compatibility with React 19
- May need to update mock implementations

#### 1.3 Update Storybook
- Current: 8.6.14s
- Target: Check if Storybook 8.x supports React 19, may need 9.x
- Action: Run `npx storybook@latest upgrade`

#### 1.4 Update Babel Presets (if needed)
- Verify `@babel/preset-react` supports React 19
- May need to update to latest 7.x or consider 8.x

### Phase 2: Code Changes

#### 2.1 Review and Update PropTypes Usage
Files to review:
- All component files in `src/components/`
- Action: Decide on PropTypes strategy (keep or remove)

#### 2.2 Review React.cloneElement
Files using `React.cloneElement`:
- `src/components/Provider.js` (line 56)
- `src/components/ProviderMock.js` (line 43)
- Action: Test thoroughly, may need adjustments for React 19 behavior

#### 2.3 Review Component Lifecycle Methods

**CRITICAL**: `UNSAFE_componentWillReceiveProps` found in:
- `src/components/BannerSuite.js` (line 92)
- `src/components/TileSuite.js` (line 82)

This lifecycle method was deprecated in React 16.3 and removed in React 17. It may still work in React 19 but:
- Action Required: Replace with `componentDidUpdate` or derive state from props in `render`
- Recommended refactor pattern:
```javascript
// Instead of UNSAFE_componentWillReceiveProps
// Use getDerivedStateFromProps (static) or componentDidUpdate

static getDerivedStateFromProps(nextProps, prevState) {
  if (nextProps.configs) {
    return {
      configs: TileSuite.processConfigs(nextProps.configs),
    };
  }
  return null;
}

// OR refactor to use componentDidUpdate
componentDidUpdate(prevProps) {
  if (prevProps.configs !== this.props.configs) {
    // handle prop changes
  }
}
```

Files with `componentDidMount`:
- `src/components/Provider.js`
- `src/components/ProviderMock.js`
- `src/components/BannerSuite.js`
- `src/components/TileSuite.js`

#### 2.4 Review Ref Usage
Files using refs:
- `src/components/Content/Point.js` (getRef method at line 16-18)
- `src/components/BannerSuite.js` (itemRefs, pointsRefs arrays)
- `src/components/TileSuite.js` (itemRefs array at line 266)
- Action: Test ref callbacks work correctly in React 19

### Phase 3: Testing & Validation

#### 3.1 Run Unit Tests
```bash
npm test
```
- Expected: Some tests may fail due to React changes
- Fix test mocks and assertions as needed

#### 3.2 Update Test Utilities
- Review and update test utilities in `__tests__/`
- Check snapshot tests (BannerSuite.js.snap)
- Update snapshots: `npm test -- -u`

#### 3.3 Manual Testing
- Test Storybook examples
- Test standalone build
- Test library import in consumer applications

#### 3.4 Browser Compatibility
- Verify ES5 target compatibility (webpack.config.js line 83)
- React 19 may have changed browser support

### Phase 4: Documentation & Release

#### 4.1 Update README
- Document minimum React version: 19.2.0
- Update peer dependency requirements

#### 4.2 Version Bump
- Update `package.json` version
- Consider major version bump (0.3.1 → 1.0.0 or 0.4.0)
- This is a breaking change (peer dependency)

#### 4.3 Documentation
- Update any component docs
- Update Storybook documentation

## Detailed Action Items

### Immediate Actions
1. ✅ Create upgrade plan (this document)
2. ⬜ Update `package.json` peer dependencies
3. ⬜ Update devDependencies to React 19 compatible versions
4. ⬜ Run dependency update: `npm install`
5. ⬜ Update lock file: `npm install --legacy-peer-deps` (if needed)

### Testing Actions
6. ⬜ Run Jest tests: `npm test`
7. ⬜ Fix failing tests
8. ⬜ Update snapshots: `npm test -- -u`
9. ⬜ Run Storybook: `npm run storybook`
10. ⬜ Test all Storybook stories manually
11. ⬜ Build library: `npm run build`
12. ⬜ Build standalone: `npm run build -- --env type=standalone`
13. ⬜ Test build output

### Code Review Actions
14. ⬜ Review PropTypes usage across all components
15. ⬜ Test Provider.js cloneElement implementation
16. ⬜ **CRITICAL**: Refactor UNSAFE_componentWillReceiveProps in BannerSuite.js
17. ⬜ **CRITICAL**: Refactor UNSAFE_componentWillReceiveProps in TileSuite.js
18. ⬜ Review all lifecycle methods (componentDidMount, componentDidUpdate)
19. ⬜ Review ref usage in Point.js, BannerSuite.js, TileSuite.js

### Integration Testing
20. ⬜ Test library in real consumer application
21. ⬜ Verify no runtime errors
22. ⬜ Verify styling works correctly
23. ⬜ Verify all interactions work

### Release Actions
24. ⬜ Update version in package.json
25. ⬜ Update README
26. ⬜ Tag release
27. ⬜ Publish to registry (if applicable)

## Risk Assessment

### High Risk Areas
1. **UNSAFE_componentWillReceiveProps** in BannerSuite.js and TileSuite.js - MUST be replaced before React 19
2. **React.cloneElement** in Provider.js and ProviderMock.js - needs thorough testing
3. **PropTypes deprecation** - consumers may rely on them
4. **Class component lifecycle** - ensure all callbacks work after refactor

### Medium Risk Areas
1. **Storybook integration** - may need significant version bump
2. **Test utilities** - testing-library may need updates
3. **Build output** - verify UMD build compatibility

### Low Risk Areas
1. **Component logic** - mostly isolated business logic
2. **Styling** - CSS/LESS should not be affected
3. **Webpack config** - should work without changes

## Rollback Plan

If issues arise:
1. Keep previous version tag
2. Revert package.json changes
3. Restore lock file from git
4. Document issues encountered

## Success Criteria

✅ All unit tests pass
✅ All Storybook stories work correctly
✅ Library builds successfully
✅ Standalone build works
✅ Manual testing in real application passes
✅ No console warnings (or acceptable warnings documented)
✅ Documentation updated
✅ Version bumped appropriately

## Timeline Estimate

- **Phase 1** (Dependencies): 1-2 hours
- **Phase 2** (Code Changes): 2-4 hours
- **Phase 3** (Testing): 4-6 hours
- **Phase 4** (Documentation/Release): 1-2 hours

**Total Estimated Time**: 8-14 hours

## Notes

- This is a **major version change** in peer dependencies
- Consider offering both React 18 and 19 support in separate package versions
- Some consumers may not be ready for React 19
- Keep communication with library consumers about the breaking change

