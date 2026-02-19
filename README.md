📋 Task
====

### Description:
The goal of this project is to build a book catalogue using the <a href="https://openlibrary.org/developers/api">OpenLibrary API</a>.

### Task Document Link:
https://drive.google.com/file/d/1RBRcuH-_oAvtjem5Xs0c4NXZ8I38aYyH/view

⚙️ How to Run the App
==================

### 🛠 Requirements

🟢 node@v20+ <br>
⚡ Vite
```package.json
"devDependencies": {
  "vite": "^7.3.1"
}
```

### 🚀 Getting Started

#### 🔹 Step 1: Clone the repository
Clone the repository to your local machine:

```bash

git clone https://github.com/Enjeer/TestProject.git
cd path/to/project/folder

```

#### 🔹 Step 2: Install dependencies
Install the project dependencies:

<code>npm install</code>


package.json

```package.json

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}

```

#### 🔹 Step 3: Run in Development Mode

 <code>npm run dev</code>

<p>The application will be available at http://localhost:5173 (default for Vite)</p>
<p>Changes in the code are automatically reflected via hot-reload</p>

<p>Check for posiible problems / missbehavour</p>


#### 🔹 Step 4: Build applicaton
Start the build. <br>
<code>npm start build</code>

The production build will be created in the dist/ folder


### 🎉 Done
You are all set and can now run the project locally!

<strong>Do not open `index.html` directry!</strong> To access the app run: <br>
<code>npm run preview</code>

<p>Built application will be available at http://localhost:4173</p>

# 🛠️ Troubleshooting


### ❗️Empty search or no results

#### 📢Symptoms:

- Clicking “Search” returns nothing or errors in console.

#### ❔Possible causes:

- Input is empty → app is designed to show “Enter query” message.

- API request failed due to network issues.

#### ✅Solution:

- Make sure your device has an internet connection.

- Check the console for network errors.

- Avoid special characters in the search query.

### ❗️Build issues

#### 📢Symptoms:

- <code>npm run build</code> fails

- dist/ folder is empty

#### ❔Possible causes:

- Node version too old

- Missing dependencies

#### ✅Solution:

- Use Node v16+

- Run <code>npm install again</code>

Make sure vite is in devDependencies
