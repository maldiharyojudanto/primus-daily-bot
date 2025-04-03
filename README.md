# primus-daily-bot

![Screenshot_25](https://github.com/user-attachments/assets/3de00271-f278-4767-ba74-61bb7806f816)

# Features
- Auto check-in daily
- Auto send "gm" message to primus discord 
- Auto check gm

# Requirement
- VS Code (optional)
- Node.js 18+

# How to get token
- Open discord and primus extension
- Inspect Element (F12)
- Go to Network -> Fetch/XHR -> select one and copy value of Authorization after Bareer (eyJhbxxxx) for primus -> select one and copy value of Authorization start with "O" for discord

# How to run
- Open VS Code
- Open terminal
- Command:
  > npm install

  > node index
- Fill tokens.txt format tokenprimus|tokendiscord (e.g. eyJhbxxxx|Oxxxxxxxx)
- Run command above
