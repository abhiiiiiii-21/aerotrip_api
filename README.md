# Flight API (Vercel Serverless Version)

A simple RESTful API for managing a list of flights, ready for deployment on Vercel as a serverless function.

## Endpoints

- **GET /api/flights** — Get all flights
- **POST /api/flights** — Add a new flight (send JSON body)

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and sign up/log in.
3. Click "New Project" and import your GitHub repo.
4. Vercel will auto-detect the `/api/flights.js` serverless function.
5. Click "Deploy".
6. Your API will be available at `https://your-project-name.vercel.app/api/flights`.

## Example Usage

**Get all flights:**
```sh
curl https://your-project-name.vercel.app/api/flights
```

**Add a new flight:**
```sh
curl -X POST -H "Content-Type: application/json" \
  -d '{"airline":"Test Air","flightNumber":"TA100"}' \
  https://your-project-name.vercel.app/api/flights
```

---

- Data is in-memory and will reset when the serverless function is reloaded.
- For more endpoints (PUT/DELETE), you can add more files or logic as needed. 