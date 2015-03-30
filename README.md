### Wolox Web America

### Running the app during development

> grunt

This will run following tasks:

1. Compile LESS to CSS

2. Combine 3rd party JS files in to one single JS file using 'usemin' plugin. Also combine all project related JS files in to one single JS file.

3. Copy template \ partial files

4. Copy images to '.build' folder.

5. Run 'jshint' on Grunt and project JS files

6. Watch for any changes to LESS, JS, HTML files and run specific tasks

7. Any changes to project files except Grunt files will kick-off 'livereload' and refresh your browser session

8. Start Express server at "9000"


### Deploying the app to s3 bucket

Make sure you have an `aws-credentials.json` with the following config:
```json
{
  "accessKeyId": "...",
  "secretAccessKey": "..."
}

```

> grunt prod

This will run the following tasks:

1. Compile LESS to CSS

2. Combine 3rd party JS files in to one single JS file using 'usemin' plugin. Also combine all project related JS files in to one single JS file.

3. Copy template \ partial files

4. Copy images to '.build' folder.

5. Run 'jshint' on Grunt and project JS files

6. Deploy to the s3 bucket everything inside '.build/' folder
