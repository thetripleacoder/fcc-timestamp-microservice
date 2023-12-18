# Timestamp Microservice

This is the boilerplate code for the Timestamp Microservice project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice

This project is a solution to the **Timestamp Microservice** challenge under the **APIs and Microservices Certification** on **FreeCodeCamp**. It provides an API endpoint for converting date strings to Unix timestamps and vice versa.

## Project URL

You can access the live version of this microservice here: [Timestamp Microservice](https://fcc-timestamp-microservice-iota.vercel.app/)

## User Stories

1. The API endpoint is `GET /api/timestamp/:date_string`.
2. A date string is considered valid if it can be successfully parsed by `new Date(date_string)` in JavaScript.
3. The Unix timestamp must be an integer (not a string) specifying milliseconds.
4. In our tests, we use date strings compliant with ISO-8601 (e.g., "2016-11-20") to ensure UTC timestamps.
5. If the date string is empty, it should be equivalent to triggering `new Date()`, i.e., the service uses the current timestamp.
6. If the date string is valid, the API returns a JSON object with the structure:

   ```json
   {
       "unix": <date.getTime()>,
       "utc": "<date.toUTCString()>"
   }
   ```

   For example:

   - Input: `/api/timestamp/2015-12-25`
     Output: `{"unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT"}`
   - Input: `/api/timestamp/1451001600000`
     Output: `{"unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT"}`

7. If the date string is invalid, the API returns a JSON object with the structure:
   ```json
   {
     "error": "Invalid Date"
   }
   ```

## Getting Started

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the server using `npm start`.
4. Access the API at `http://localhost:3000/api/timestamp/:date_string`.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
