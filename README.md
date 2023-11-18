# LMS Frontend

### Setup Instruction

1. Clone the project

```
    git clone https://github.com/arundalakoti/lms-frontend.git
```

2. Move into the directory

```
cd lms-frontend
```

3. Install dependencies

```
npm i
```

4. Run the server

```
npm run dev
```

### Adding plugins and dependencies

```
    npm i @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js axios react-hot-toast
```

### Adding auto import sort for eslint

1. Install the plugin

```
    npm install eslint-plugin-simple-import-sort 
```

2. Add rule in '.eslintrc.cjs'

```
    'simple-import-sort/imports': 'error'
```

3. Add simple-import-sort in plugin array of '.eslintrc.cjs' file

```
    plugins: ['react-refresh', 'simple-import-sort'],
```

4. Open setting.json in vscode configuration settings

5. Add the following line

```
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
```