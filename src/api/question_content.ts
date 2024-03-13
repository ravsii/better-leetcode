// {
//     "query": "\n    query questionContent($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    content\n    mysqlSchemas\n    dataSchemas\n  }\n}\n    ",
//     "variables": {
//         "titleSlug": "two-sum"
//     },
//     "operationName": "questionContent"
// }
// {
//     "data": {
//         "question": {
//             "content": "<p>Table: <code>Person</code></p>\n\n<pre>\n+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| personId    | int     |\n| lastName    | varchar |\n| firstName   | varchar |\n+-------------+---------+\npersonId is the primary key (column with unique values) for this table.\nThis table contains information about the ID of some persons and their first and last names.\n</pre>\n\n<p>&nbsp;</p>\n\n<p>Table: <code>Address</code></p>\n\n<pre>\n+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| addressId   | int     |\n| personId    | int     |\n| city        | varchar |\n| state       | varchar |\n+-------------+---------+\naddressId is the primary key (column with unique values) for this table.\nEach row of this table contains information about the city and state of one person with ID = PersonId.\n</pre>\n\n<p>&nbsp;</p>\n\n<p>Write a solution to report the first name, last name, city, and state of each person in the <code>Person</code> table. If the address of a <code>personId</code> is not present in the <code>Address</code> table, report <code>null</code> instead.</p>\n\n<p>Return the result table in <strong>any order</strong>.</p>\n\n<p>The result format is in the following example.</p>\n\n<p>&nbsp;</p>\n<p><strong class=\"example\">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> \nPerson table:\n+----------+----------+-----------+\n| personId | lastName | firstName |\n+----------+----------+-----------+\n| 1        | Wang     | Allen     |\n| 2        | Alice    | Bob       |\n+----------+----------+-----------+\nAddress table:\n+-----------+----------+---------------+------------+\n| addressId | personId | city          | state      |\n+-----------+----------+---------------+------------+\n| 1         | 2        | New York City | New York   |\n| 2         | 3        | Leetcode      | California |\n+-----------+----------+---------------+------------+\n<strong>Output:</strong> \n+-----------+----------+---------------+----------+\n| firstName | lastName | city          | state    |\n+-----------+----------+---------------+----------+\n| Allen     | Wang     | Null          | Null     |\n| Bob       | Alice    | New York City | New York |\n+-----------+----------+---------------+----------+\n<strong>Explanation:</strong> \nThere is no address in the address table for the personId = 1 so we return null in their city and state.\naddressId = 1 contains information about the address of personId = 2.\n</pre>\n",
//             "mysqlSchemas": [
//                 "Create table If Not Exists Person (personId int, firstName varchar(255), lastName varchar(255))",
//                 "Create table If Not Exists Address (addressId int, personId int, city varchar(255), state varchar(255))",
//                 "Truncate table Person",
//                 "insert into Person (personId, lastName, firstName) values ('1', 'Wang', 'Allen')",
//                 "insert into Person (personId, lastName, firstName) values ('2', 'Alice', 'Bob')",
//                 "Truncate table Address",
//                 "insert into Address (addressId, personId, city, state) values ('1', '2', 'New York City', 'New York')",
//                 "insert into Address (addressId, personId, city, state) values ('2', '3', 'Leetcode', 'California')"
//             ],
//             "dataSchemas": [
//                 "data = [[1, 'Wang', 'Allen'], [2, 'Alice', 'Bob']]\nperson = pd.DataFrame(data, columns=['personId', 'firstName', 'lastName']).astype({'personId':'Int64', 'firstName':'object', 'lastName':'object'})",
//                 "data = [[1, 2, 'New York City', 'New York'], [2, 3, 'Leetcode', 'California']]\naddress = pd.DataFrame(data, columns=['addressId', 'personId', 'city', 'state']).astype({'addressId':'Int64', 'personId':'Int64', 'city':'object', 'state':'object'})"
//             ]
//         }
//     }
// }
