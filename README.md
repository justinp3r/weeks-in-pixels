<h2>Weeks in Pixels - Digital Journal </h2>
A minimalist digital journal that visualizes your year through checkboxes. 
The left side tracks your yearly progress in 52 weeks, while a timeline on the
right captures your personal moments and thoughts.

Built with React, TypeScript
and Material-UI,
featuring a dark mode for a sleek 
user experience. 

Additionally, a lightweight REST API 
was developed with Express to 
handle CRUD operations for saving posts.

<h2> Deployment </h2>

Install dependencies:

```shellscript
npm install
```
Dev Server starten:
 
```shellscript
npm run dev
```

Preview Production:
 
```shellscript
npm run preview
```

Build the Docker Container:

```shellscript
docker build -t saturn-frontend:latest .
```

Run in Docker Container:

```shellscript
docker run --name FRONTEND -p 3001:5173 saturn-frontend
```
