
### Lesson Title 1 : Navigating and Listing Files (pwd & ls)

---

#### pwd - Print Working Directory
- **Purpose**: Shows the absolute path of your current location in the filesystem.
- **Syntax**: Simply type `pwd` and press Enter.
- **Concept**: The shell always has a "current" or "working" directory where you are operating. This command tells you exactly where that is.

---

#### ls - List Directory Contents
- **Purpose**: Displays the files and directories inside your current working directory.
- **Concept**: Think of `ls` as asking the shell "What is in this folder?"

##### Basic Usage
- Running `ls` alone lists the contents of your **current directory**.

| Command | What it Does |
|---------|---------------|
| `ls` | Lists contents of the current directory |
| `ls [name]` | Lists a specific file or directory |

##### Using ls with Arguments
An **argument** is extra information you type after a command. With `ls`:
- If the argument is a **file**, `ls` lists that file.
- If the argument is a **directory**, `ls` lists the contents of that directory.

> **Example**:  
> `ls /home/repl`  
> This lists the contents of the `repl` directory (your home directory), regardless of your current location.

---

### Command Reference

| Command | Syntax | Purpose | Example |
|---------|--------|---------|---------|
| `pwd` | `pwd` | Prints the absolute path of the current working directory | `pwd` |
| `ls` | `ls` | Lists contents of the current working directory | `ls` |
| `ls` | `ls [directory]` | Lists contents of a specific directory | `ls /home/repl/seasonal` |

---

### Practical Workflow

**To explore a new directory:**
1. Use `pwd` to confirm where you are.
2. Use `ls` to see what's in your current location.
3. Use `ls [directory_name]` to peek inside a specific directory without moving there.

---

### Key Takeaways

- `pwd` always shows you your exact location in the filesystem.
- `ls` is the primary tool for viewing files and folders.
- When you give `ls` a directory name as an argument, it shows the contents of that directory.
- You can inspect any directory from anywhere—you don't need to "go there" first.
- Commands can take **arguments** (like `/home/repl/seasonal`) to change what they act upon.

---

### Quick Command Cheat Sheet

| Command | What it Does |
|---------|---------------|
| `pwd` | Prints your current directory |
| `ls` | Lists files in the current directory |
| `ls [path]` | Lists files in the specified directory |
