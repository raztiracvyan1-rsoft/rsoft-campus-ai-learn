# R'SOFT Campus Connect

Create a complete, production-quality responsive web application UI called R’SOFT Campus.

R’SOFT Campus is the internal learning management platform for R’SOFT Programming School.

The platform will be used by students, teachers and administrators.

IMPORTANT:
For now create ONLY the complete frontend/UI.

Do NOT build Supabase or any real backend.

Use realistic mock data and organize the frontend so that later it can easily connect to a REST API built with:

Node.js

Express.js

MongoDB

JWT Authentication

Use React with a clean component architecture.

The application should feel like a modern educational SaaS platform, not a basic school website.

BRAND

Brand name:

R’SOFT Campus

Main company:

R’SOFT

R’SOFT is a programming and technology school.

Use a modern technology/education visual identity.

Primary brand color:

#019FE2

Supporting colors:

#FFDF59
#020202
#FFFFFF

Use lots of white space.

The design should feel:

modern

clean

premium

friendly for teenagers

professional for teachers

simple to understand

slightly futuristic

technology-focused

Use rounded cards, subtle shadows, clean icons and smooth animations.

Avoid excessive gradients.

Use excellent typography and spacing.

Create both:

Desktop responsive version

Tablet version

Mobile version

USER ROLES

The system has three primary roles:

Student

Teacher

Administrator

Design different dashboards and navigation options for every role.

The frontend should simulate switching between these roles for demonstration purposes.

AUTHENTICATION

Create:

Login page

Fields:

Email / Username
Password
Remember me
Forgot password

Button:

Մուտք գործել

Show R’SOFT Campus branding.

Also create:

Forgot Password page
Reset Password page

Do not implement real authentication yet.

STUDENT DASHBOARD

Create a modern student dashboard.

Header:

Welcome message such as:

Բարի գալուստ, Արամ 👋

Show:

Profile photo

Notifications

Current course

Current level

Overall progress percentage

Dashboard widgets:

Current Courses

Upcoming Homework

Recent Grades

Attendance

Learning Progress

Upcoming Lessons

AI Feedback

Announcements

Example statistics:

Courses: 3
Completed Lessons: 24
Homework Completed: 18
Average Grade: 8.7/10
Attendance: 92%

Create a weekly learning-progress chart.

SIDEBAR

Desktop sidebar:

Dashboard
Իմ դասընթացները
Դասեր
Տնային աշխատանքներ
Գնահատականներ
AI Feedback
Առաջադիմություն
Հաճախումներ
Օրացույց
Հայտարարություններ
Պրոֆիլ

At bottom:

Settings
Logout

Use appropriate icons.

On mobile use bottom navigation or collapsible navigation.

COURSES PAGE

Create page:

Իմ դասընթացները

Course cards should show:

Course image/icon
Course name
Teacher
Progress percentage
Number of completed lessons
Number of remaining lessons

Example courses:

Web Development
JavaScript
React.js
Node.js
Python
Graphic Design

Each card should have:

Շարունակել դասընթացը

COURSE DETAILS

Clicking a course should open a detailed course page.

Example:

JavaScript

Teacher: Արման Սարգսյան

Show:

Course progress
Course description
Teacher information
Lessons
Homework
Grades
Resources

Tabs:

Դասեր
Տնայիններ
Նյութեր
Գնահատականներ

LESSONS SYSTEM

Create a lessons list.

Organize lessons into modules.

Example:

Module 1 — JavaScript Basics

Lesson 1 — Variables
Lesson 2 — Data Types
Lesson 3 — Conditions
Lesson 4 — Loops

Module 2 — Arrays

Lesson 5 — Arrays Basics
Lesson 6 — Array Methods
Lesson 7 — Practice

Each lesson should show a status:

Completed
Current
Locked

Clicking a lesson should open a full Lesson Page.

LESSON PAGE

Create a beautiful learning page.

Left area:

Lesson content.

Right sidebar:

Course lessons.

Lesson content can contain:

Title
Description
Text explanation
Code examples
Images
Video placeholder
Important notes
Downloadable files
Teacher attachments

At the bottom:

Previous Lesson
Mark as Complete
Next Lesson

Include:

Associated Homework

button:

Անցնել տնային աշխատանքին

HOMEWORK SYSTEM

Create a dedicated Homework page.

Tabs:

Բոլորը
Սպասվող
Ուղարկված
Ստուգված
Ժամկետանց

Each homework card shows:

Homework title
Course
Teacher
Assigned date
Deadline
Difficulty
Status
Grade if available

Statuses:

Չսկսված
Ընթացքի մեջ
Ուղարկված
AI Ստուգված
Ուսուցչի կողմից ստուգված
Ժամկետանց

HOMEWORK DETAILS

Create detailed homework page.

Show:

Title
Course
Teacher
Deadline
Instructions
Attachments
Resources
Maximum grade

Example assignment:

JavaScript — Arrays Practice

Tasks:

Create an array containing 10 numbers.

Find the maximum number.

Calculate the sum.

Remove duplicate values.

Student should have an answer/submission section.

Allow UI for:

Text answer
Code answer
File upload
Multiple files
GitHub repository URL

Button:

Ուղարկել աշխատանքը

Show submission confirmation modal.

AI HOMEWORK CHECKING

This is one of the most important parts of the platform.

After the student submits homework, show:

AI Ստուգում է աշխատանքը...

Use a clean animated AI processing interface.

After analysis show:

AI Feedback

Sections:

✅ Ճիշտ կատարված մասեր

⚠️ Սխալներ

💡 Առաջարկություններ

🔧 Ինչպես ուղղել

AI should NOT give the final official grade.

Show clearly:

"AI-ի գնահատումը նախնական է։ Վերջնական գնահատականը տալիս է ուսուցիչը։"

Example AI feedback:

Overall completion: 82%

Code Quality
8/10

Correctness
7/10

Logic
9/10

Possible score:
8/10

But label it:

AI Estimate

Allow the student to:

Edit Submission

and:

Submit Again

until the deadline or teacher review.

TEACHER REVIEW

After the teacher reviews the homework show:

Ուսուցչի գնահատական

9/10

Teacher feedback:

"Լավ աշխատանք է։ Ուշադրություն դարձրու array մեթոդների ճիշտ ընտրությանը։"

Also show:

AI suggestion
Teacher final grade

side by side.

Teacher grade must visually be the final authoritative grade.

GRADES PAGE

Create a beautiful student grades page.

Show:

Overall Average
Course Average
Homework Average
Attendance

Create grade table:

Assignment
Course
AI Estimate
Teacher Grade
Submission Date
Status

Also show progress charts.

Allow filtering by:

Course
Month
Status

PROGRESS PAGE

Create detailed analytics.

Widgets:

Overall Progress
Course Completion
Homework Completion
Average Grade
Attendance

Charts:

Weekly activity
Grade progression
Completed assignments
Hours spent learning

Create skill progress bars such as:

HTML — 95%
CSS — 89%
JavaScript — 76%
React — 45%

ATTENDANCE

Create attendance page.

Show calendar.

Statuses:

Present
Absent
Late
Excused

Statistics:

Attendance rate
Classes attended
Classes missed
Late arrivals

CALENDAR

Create a student calendar.

Calendar events:

Lessons
Homework deadlines
Tests
Exams
School events

Use different visual indicators.

Clicking an event should open details.

ANNOUNCEMENTS

Create announcement page.

Examples:

Նոր JavaScript քննություն
Դասաժամի փոփոխություն
R’SOFT միջոցառում
Նոր դասընթաց

Announcements should include:

Title
Author
Date
Course
Message
Attachment if available

Important announcements should be visually highlighted.

NOTIFICATIONS

Create notification dropdown and full notification page.

Examples:

"Ձեր տնային աշխատանքը ստուգվել է։"

"Նոր տնային աշխատանք է ավելացվել։"

"JavaScript դասը վաղը ժամը 18:30-ին է։"

"AI ստուգումը ավարտված է։"

"Դուք ստացել եք 9/10 գնահատական։"

Allow:

Mark as read
Mark all as read

STUDENT PROFILE

Profile page should contain:

Profile image
Full name
Email
Phone
Student ID
Date joined
Courses
Current level

Allow UI for editing basic profile information.

Create password change section.

TEACHER DASHBOARD

Teacher dashboard should be different from student dashboard.

Show:

Total Students
Active Courses
Homework Waiting for Review
Lessons This Week
Average Student Performance

Sections:

Recent submissions
Students requiring attention
Upcoming lessons
Recent AI homework analyses

TEACHER COURSES

Teachers should see courses they teach.

Example:

JavaScript
React.js
Node.js

Clicking course should show:

Students
Lessons
Assignments
Grades
Attendance
Analytics

STUDENT LIST FOR TEACHER

Create student table.

Columns:

Student
Course
Progress
Average Grade
Attendance
Last Activity
Status

Search students.

Filters:

Course
Performance
Attendance

Click student to open full student profile.

TEACHER STUDENT PROFILE

Show:

Student name
Courses
Progress
Grades
Attendance
Homework history
AI feedback history

Teacher should see a timeline of student activity.

HOMEWORK MANAGEMENT FOR TEACHERS

Teacher can create homework.

Create homework form:

Title
Description
Course
Lesson
Deadline
Maximum Grade
Attachments
Instructions

Allow different answer types:

Text
Code
File
GitHub URL

Toggle:

Enable AI checking

Teacher can provide AI evaluation criteria.

Example:

Evaluation criteria:

Correctness — 40%
Code Quality — 20%
Logic — 25%
Completion — 15%

HOMEWORK REVIEW PAGE

Create a powerful teacher review interface.

Left side:

Student submission

Show:

Code
Text
Files
GitHub link

Middle / right:

AI Analysis

Show:

Detected problems
Correct parts
Suggestions
Possible grade

Teacher actions:

Enter final grade

Example:

9 / 10

Teacher feedback textarea.

Buttons:

Save Draft
Request Changes
Approve & Grade

Teacher must always make final grading decision.

LESSON MANAGEMENT

Teachers can create lessons.

Create lesson editor UI.

Fields:

Lesson title
Course
Module
Description
Lesson content
Code examples
Video URL
Files
Homework association

Use rich text editor style interface.

Allow:

Save Draft
Publish

ATTENDANCE MANAGEMENT

Teacher selects:

Course
Lesson
Date

Show student list.

Each student can be marked:

Present
Absent
Late
Excused

Button:

Պահպանել հաճախումները

TEACHER GRADEBOOK

Create spreadsheet-like gradebook.

Rows:

Students

Columns:

Assignments

Last column:

Average

Teacher can click individual grades.

Use horizontal scrolling on smaller screens.

ADMIN DASHBOARD

Create complete administration dashboard.

Statistics:

Total Students
Total Teachers
Active Courses
Classes Today
Homework Submitted
Average Attendance
Average Grade

Charts:

Student Growth
Course Popularity
Monthly Activity
Student Performance

ADMIN STUDENTS

Create student management.

Table:

Name
Email
Phone
Course
Teacher
Status
Joined
Actions

Actions:

View
Edit
Deactivate
Delete

Button:

Ավելացնել ուսանող

ADMIN TEACHERS

Teacher management page.

Columns:

Teacher
Courses
Students
Phone
Email
Status
Actions

Button:

Ավելացնել ուսուցիչ

ADMIN COURSES

Course management.

Show:

Course name
Teacher
Students
Duration
Status
Progress

Allow:

Create
Edit
Archive

COURSE CREATION

Admin can create a course.

Fields:

Course Name
Description
Cover Image
Teacher
Duration
Start Date
End Date
Category
Maximum Students

Example categories:

Web Development
Python
Graphic Design
Children Programming
AI
Vibe Coding

USER MANAGEMENT

Admin can create accounts.

Fields:

First Name
Last Name
Email
Phone
Password
Role

Role options:

Student
Teacher
Admin

If Student:

Choose course

If Teacher:

Assign courses

SCHOOL SCHEDULE

Create school-wide schedule.

Admin can create classes.

Fields:

Course
Teacher
Classroom
Office
Date
Start time
End time

Office examples:

Էջմիածին
Արմավիր

ADMIN ANALYTICS

Create advanced analytics page.

Charts for:

Active students
New students
Attendance
Grades
Homework completion
Course progress
Teacher workload

Allow date filtering:

Today
Week
Month
Year

GLOBAL SEARCH

Add a global search function in the top header.

Student can search:

Lessons
Courses
Homework

Teacher can search:

Students
Lessons
Assignments

Admin can search:

Students
Teachers
Courses

Command-style dropdown UI would be ideal.

AI ASSISTANT

Create a small AI assistant button.

Name:

R’SOFT AI

When clicked open a side panel.

Students can ask questions related to their course.

Examples:

"Բացատրիր JavaScript array-ը"

"Ինչու իմ կոդը չի աշխատում"

"Օգնիր հասկանալ այս դասը"

The assistant should NOT directly solve active homework unless requested by school policy.

UI only for now.

DARK MODE

Support:

Light Mode
Dark Mode

Save preference using localStorage.

LANGUAGE

Primary UI language should be Armenian.

Structure the project so other languages can easily be added later.

Use Armenian for realistic interface content.

Technical names like:

JavaScript
React
Node.js
GitHub
AI

can remain English.

RESPONSIVE DESIGN

Desktop:

Full sidebar.

Tablet:

Collapsed sidebar.

Mobile:

Optimized mobile dashboard.

Homework submission, lessons and grading should work perfectly on mobile.

COMPONENTS

Create reusable components such as:

Sidebar
Header
NotificationDropdown
StatCard
CourseCard
HomeworkCard
LessonCard
ProgressBar
GradeBadge
StudentTable
TeacherTable
Modal
ConfirmDialog
EmptyState
LoadingSkeleton
AIReviewPanel
Calendar
ChartCard
ProfileMenu
SearchCommand

MOCK DATA

Create realistic mock data.

Students:

Արամ Սարգսյան
Մարիամ Գրիգորյան
Դավիթ Մկրտչյան
Անի Պետրոսյան

Teachers:

Տիգրան Հարությունյան
Աննա Մարտիրոսյան

Courses:

Web Development
JavaScript
React.js
Node.js
Python
Graphic Design

Create enough data for the application to look like a real functioning R’SOFT school system.

Do not leave major pages empty.

ROUTES

Use proper routes.

Examples:

/login

/student/dashboard
/student/courses
/student/courses/:id
/student/lessons/:id
/student/homework
/student/homework/:id
/student/grades
/student/progress
/student/attendance
/student/calendar
/student/announcements
/student/profile

/teacher/dashboard
/teacher/courses
/teacher/courses/:id
/teacher/students
/teacher/students/:id
/teacher/homework
/teacher/homework/create
/teacher/submissions/:id
/teacher/attendance
/teacher/gradebook

/admin/dashboard
/admin/students
/admin/teachers
/admin/courses
/admin/courses/create
/admin/schedule
/admin/analytics
/admin/settings

FRONTEND ARCHITECTURE

Keep code very clean and structured.

Suggested structure:

src/
components/
layouts/
pages/
student/
teacher/
admin/
auth/
data/
hooks/
services/
utils/
contexts/
assets/

Create a service layer prepared for future backend connection.

Example:

services/
authService.js
courseService.js
homeworkService.js
studentService.js
teacherService.js
gradeService.js
aiService.js

For now these services can use mock data.

Do NOT tightly couple components to static arrays.

Later these services will call our Express REST API.

STATE

Create appropriate frontend state for things such as:

Current user
Notifications
Theme
Homework submissions
Course progress

Use Context API or another lightweight approach.

Avoid unnecessary complexity.

UI QUALITY

Make this look like a real SaaS product ready for launch.

Pay particular attention to:

Dashboard hierarchy
Spacing
Cards
Typography
Charts
Tables
Loading states
Empty states
Modals
Hover effects
Mobile design
Animations

Use smooth subtle animations.

Every button should have working frontend behavior where possible.

Menus should open.

Tabs should work.

Filters should work.

Search UI should work using mock data.

Forms should validate frontend fields.

Modals should work.

Do not create static screenshots disguised as an application.

Build an actually navigable frontend.

IMPORTANT PRODUCT LOGIC

The homework workflow should visually demonstrate this process:

Teacher creates homework

↓

Student receives homework

↓

Student completes homework

↓

Student submits homework

↓

AI analyzes the submission

↓

AI provides corrections and suggestions

↓

Student can improve and resubmit

↓

Teacher reviews submission + AI analysis

↓

Teacher gives final grade

↓

Grade appears in student's profile and analytics

This workflow is one of the core selling points of R’SOFT Campus.

Make it very clear and polished in the interface.

FINAL REQUIREMENT

Generate the entire frontend application, not only the dashboard.

All major pages listed above should be available and connected through navigation.

Use realistic Armenian school data.

The finished product should feel like a serious internal educational platform that R’SOFT could actually give to its students and teachers.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://rsoft-campus-ai-learn.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b6b7fa0b-15f3-4d7c-a9b3-924da7c4dfe1).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
