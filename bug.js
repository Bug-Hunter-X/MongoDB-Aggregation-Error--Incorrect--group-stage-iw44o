```javascript
//Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {$match: { /* some filter */ }},
  {$group: {_id: "$field", sum: {$sum: "$anotherField"}}}, //Error: using string instead of expression
  {$sort: {sum: -1}},
  {$limit: 10}
]);
```