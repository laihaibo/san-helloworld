import uuid from '../utils/uuid';

class User {
  constructor({ name, status }) {
    this.uuid = uuid();
    this.name = name;
    this.status = status;
  }
}

export default User;
