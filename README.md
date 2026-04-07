This is my Checkit Movies App file showing how to get started

## Getting Started

# 1. Clone the repo

git clone https://github.com/eze-ebuka-jude/checkit_movie_app.git

# 2. Move into the project

cd your-repo

# 3. Install dependencies

npm install

# 4. Add environment variables

cp .env.example .env.local

# 5. Start development server

npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Architecture Decisions

# 1. Nextjs App Structure

Used App Router for file based routing

# 2. Seperation of concerns

Clean UI, Logic reusability and code scalability

# 3. State Management

Used useState and useEffect for simpler and unnecessary complexity for the app size

## Performance Optimization

# 1. Image Optimization

Used Nextjs <Image /> for lazy loading, responsive images and bandwidth usage

# 2. Code Splitting

Used for faster initial load, only load necessary code

# 3. Debounced search

To prevent excessive API calls to improve performance and API usage efficiency
