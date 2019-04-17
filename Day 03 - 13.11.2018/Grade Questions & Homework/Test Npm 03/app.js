var dfs = require('./node_modules/date-from-string');
 
dfs.parse()
// same as new Date(2013, 10, 14)
console.log(dfs.parse('2013-11-14'));
 
// same as new Date(2013, 0, 1)
dfs.parse('2013-01-01') === dfs.parse('2013-1-1');
 
// new Date('2013-11-14T00:00:00.000Z')
console.log(dfs.parse('2013-11-14T00:00:00.000Z'));
 
/** You can also override time **/
 
// same as new Date(2013, 10, 14, 15, 49, 30, 12)
dfs.parse('2013-11-14', 15, 49, 30, 12);
 
// Or also with a full date and time
// same as new Date(2013, 0, 1, 15, 49, 30, 12)
dfs.parse('2013-01-01T00:00:00.000Z', 15, 49, 30, 12);