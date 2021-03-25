# Requirements

We want a Frontend + Backend application that allows you to create, read, update and delete a list of contacts. Each contact will have: First name, Last name, Email, and phone number. All the fields are mandatory and there can’t be two contacts with the same email. You should be able to see the history of edits on those contacts. The contacts will be persisted in the database.

# Solution
### Backend
- Server: Node.js + Express (express-generator)
- Database: MongoDB + Mongoose ODM

### Frontend
- React (create-react-app)
- React-Bootstrap

### Run
```
docker-compose up -d --build
```
# Potential Improvements
- Move strings to constant file
- _Backend_ - Logger to avoid console.logs (Winston)
- _Backend_ - Cover all endpoints with tests
- _Frontend_ -  Project Structure
- _Frontend_ -  Handling of error responses from the backend
- _Frontend_ -  Add tests
