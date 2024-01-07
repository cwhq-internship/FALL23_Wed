import sqlite3
connection = sqlite3.connect('database/database.db')

sql = connection.cursor()

sql.execute('''
create table if not exists test_table (
    id integer primary key autoincrement,
    firstName Text,
    lastName Text,
    age Integer
)''')

user_data = ("Sakethram", "Badri", 36)

sql.execute("insert into test_table (firstName, lastName, age) values (?, ?, ?)", user_data)

connection.commit()

sql.execute('''
create table if not exists words_typed(
    id integer primary key autoincrement,
    words Integer
)''')

testwords = (5)
sql.execute("insert into words_typed (words) values (5)")
connection.commit()