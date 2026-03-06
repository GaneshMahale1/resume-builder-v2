# Frontend Bug Report & Issues

## CRITICAL BUGS

### 1. **Auto-save Logic Bug** (`ResumeDashboard.jsx:42-48`)
**Issue**: Auto-save only triggers if `education.length > 1` or `experience.length > 1`, but default is 1 item.
- User data won't auto-save until they add 2nd education or experience
- Validation runs but auto-save silently fails for single entries
**Fix**: Change condition to check if ANY data exists, not array length > 1

### 2. **Array Index Mismatch in Validation Messages** 
**Issue**: `validEducation.forEach((edu, index) => ...)` uses filtered index (0-based from filter), not original index
- User sees "Education 1" in message but it could be wrong display
- Confusing when displaying errors
**Fix**: Track original indices separately

### 3. **Template Load Incomplete** (`ResumeDashboard.jsx:74`)
**Issue**: `handleLoadTemplate` doesn't load all fields - missing achievements, coursework, publications, research, etc.
```jsx
// MISSING: achievements, coursework, publications, research, researchInterest, technicalSkills
```
**Fix**: Load all fields from template

### 4. **Array Access Without Bounds Check** (Forms)
**Issue**: `resumeData.education[index]?.field` could crash if index out of bounds
**Fix**: Add defensive checks

---

## HIGH PRIORITY BUGS

### 5. **Memory Leak in AutoSave** (`ResumeDashboard.jsx`)
**Issue**: useEffect registers `autoSaveResume` but never calls `clearAutoSave()` on unmount
**Fix**: Add cleanup function in useEffect

### 6. **Email/Password Validation Overlap** (`Login.jsx`)
**Issue**: Form accepts ANY email/password combo (demo mode), but accepts terms checkbox is required
- Confusing UX: demo mode but still requires terms
**Fix**: Either allow skip all OR make all required

### 7. **Validation Index Display Bug**
**Issue**: When showing validation errors like "Experience 1" it uses forEach index from filtered array
- If user has 0 and 2 experience entries, the 2nd shows as "Experience 1"
**Fix**: Use original array indices

---

## MEDIUM PRIORITY BUGS

### 8. **Missing Prop Validation**
**Issue**: No PropTypes or TypeScript validation
- Forms receive `resumeData` but don't validate structure
- Could pass wrong shape and crash

### 9. **Inconsistent Null Checks**
**Issue**: Mix of `?.` optional chaining and no checks
- Some code checks `resumeData?.education` 
- Other code directly accesses `resumeData.education`

### 10. **Form Mobile Menu Icon References** (`ExperienceForm.jsx:107`)
**Issue**: Mobile menu loops through `navItems` but items don't have `.icon` property
```jsx
<span className="text-xl">{item.icon}</span>  // undefined!
```
**Fix**: Remove icon rendering or add icons to items

### 11. **Export Function Silent Failure** (`localStorage.js:81`)
**Issue**: `exportResumeAsJSON` downloads but doesn't notify user of success/failure
- User doesn't know if export worked
**Fix**: Return true/false and show notification

### 12. **Loading State Display Bug** (`Login.jsx`)
**Issue**: On error, loading spinner still shows while button text says "Sign in"
- Spinner visible for 1.5s even on error

### 13. **Validation Doesn't Display Inline for All Fields**
**Issue**: Only Education/Experience have inline validation
- PersonalInfo has it, but SkillsForm, Achievements, etc. don't show errors
**Fix**: Add validation UI to remaining forms
