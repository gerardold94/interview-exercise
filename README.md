# 🧪 Rails Interview Exercise

Welcome! This exercise is designed to evaluate how you approach building a small feature in a Rails application, including modeling, background jobs, and general code quality.

---

## 🚀 Getting Started

This project is designed to run in **GitHub Codespaces** with minimal setup.

### 1. Start the environment

If you're using Codespaces:

- Open the repository in Codespaces
- Wait for the environment to finish building

### 2. Run the app

In one terminal:

```bash
bin/dev
```

### 3. Verify it's working

- Visit the url provided by codespaces
- Ensure the app loads correctly

---

## 🧩 The Exercise

You will implement a simple **Task Management feature**.

### Requirements

We want to support managing tasks and marking them as completed.

#### 1. Task Model

A `Task` should have:

- `title` (string)
- `completed` (boolean, default: false)

---

#### 2. Mark Task as Completed

Implement functionality to:

- Mark a task as completed

---

#### 3. Background Job

When a task is marked as completed:

- Enqueue a background job using Sidekiq

The job should:

- Simulate some asynchronous work (e.g., logging, processing, etc.)
- Be clearly connected to the task completion

---

#### 4. Basic UI or API

Provide a way to:

- Create a task
- View tasks
- Mark a task as completed

This can be:
- Simple Rails views

---

## ✅ What We’re Looking For

Focus on:

- Clear and readable code
- Good naming
- Reasonable structure
- Basic Rails conventions
- Proper use of background jobs

---

## 💡 Bonus Points (Optional)

If you have time, consider:

- Adding validations
- Handling edge cases (e.g., completing an already completed task)
- Making the job idempotent
- Adding tests
- Using service objects or patterns you find appropriate

---

## ⏱ Time Expectation

This exercise is designed to take approximately:

**30 minutes**

---

## 🧠 Notes

- If something doesn’t work, feel free to debug and explain your thinking
- You can use the internet, documentation or AI tools
- Ask clarifying questions if needed
- Be ready to walk through your approach and decisions

---

## 🙌 Good luck!

We’re more interested in your thought process than a perfect solution.
