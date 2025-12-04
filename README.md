## Live Demo

You can see the live Book Management application here:  
[Book Management App](https://book-management-api-integration.vercel.app/)






BookForm Component – Features & Functionality
Overview

BookForm React component ka use Books CRUD application me hota hai.

Add new book

Edit existing book

Live preview of cover image

Form validation

Loader for fetching/editing data

Features
1. Add / Edit Mode

Agar URL me id present hai, form edit mode me khulta hai → existing book ka data fetch hota hai.

Agar id absent hai → add mode → blank form.

2. Form Fields

Title (text) → required

Author (text) → required

Genre (text) → required

Year (text) → required, numeric, max 4 digits

Status (select) → required → options: Available, Issued

Cover Image URL (text) → optional → live preview

3. Live Image Preview

coverimg URL enter karne par preview dikhega

Agar URL invalid ya empty → default question-mark image dikhega

object-fit: cover → card me image uniform dikhegi

4. Validation

Required fields check

Year numeric + max 4 digits

Errors inline display (text-danger small)

5. Submit

handleSubmit → check validation → call API

POST → Add new book

PUT → Update existing book

Success → toast message, navigate to dashboard

Failure → toast error

6. Loader

Form data fetch hone tak loader dikhaya jata hai

loading state ke basis pe UI block

7. Responsive / Compact Design

Form centered, width max 500px

Scroll only inside form if content zyada ho

Live preview + input spacing adjusted for compact view

8. Cancel Button

Navigate back to dashboard without saving

9. Error Handling

API errors → console + toast notification

Optional Improvements (Future)

Drag & drop cover image upload

Rich text input for description

Real-time validation while typing

Mobile responsive tweaks
