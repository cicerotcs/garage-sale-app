# Garage Sale App

The Garage Sale app allows users to locate garage sales within their location on a map or in a grid view. Users can also add new listings, edit and delete existing listings, update their profile information and profile picture, and search for garage sales.

## Technologies

This app is built with the following technologies:

- Leaflet for map functionality.
- React for frontend development.
- Node.js for backend development.
- PostgreSQL for database management.

## Getting Started

To get started with the Garage Sale app, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the client directory and run npm install to install the necessary dependencies.
3. Navigate to the server directory and run npm install to install the necessary dependencies.
4. Set up your PostgreSQL database with the schema provided in server/db/schema.sql.
5. Create a .env file in the server directory with the following environment variables:
   - `DATABASE_URL` - the URL for your PostgreSQL database
   - `PORT` - the port number to run the server on
   - `JWT_SECRET_KEY` - a secret key for JSON Web Token authentication
   - `JWT_EXPIRES` - how long the JWT is going to expire.
   - `VITE_APP_GOOGLE_API` - you need a google api key to use on client side
6. Run npm run dev in the client directory to start the frontend.
7. Run npm run dev in the server directory to start the backend.

## Usage

To use the Garage Sale app, follow these steps:

- Log in or create an account.
- Update your profile information and profile picture if desired.
- Navigate to the map view or grid view to view all garage sales within your location.
- Click on a garage sale to view more information and directions.
- Use the search feature to find garage sales by name.
- Add a new listing by clicking the "Add Listing" button on the dashboard.
- Edit or delete existing listings on the dashboard.

## Dependencies

- React
- React-Router
- Google Maps API

## Contributing

If you'd like to contribute to the Garage Sale app, please follow these steps:

1. Fork this repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your fork.
5. Create a pull request to merge your changes into the main branch.

## License

This app is licensed under the MIT License. See the LICENSE file for details.

Note: This project will not be deployed due to the use of API keys which are not included in this repository for security reasons. If you would like to test the app, please follow the "Getting Started" instructions to run the app locally on your machine.
