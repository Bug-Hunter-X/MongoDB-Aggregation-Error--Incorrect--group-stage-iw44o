```javascript
//Corrected aggregation pipeline
db.collection.aggregate([
  {$match: { /* some filter */ }},
  {$group: {_id: "$field", sum: {$sum: $anotherField}}}, //Corrected: Using expression $anotherField
  {$sort: {sum: -1}},
  {$limit: 10}
]);
```