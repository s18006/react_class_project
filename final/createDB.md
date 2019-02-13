Description for DB setting:
db name: reactApp
user: testuser
password: '0808'

create table to save dates and events
create table deadlines (id int primary key auto_increment not null, action varchar(255) not null, date datetime not null);


Start app:
before start the node and react system start xampp
/ then
node server.js&
/ and
npm start
