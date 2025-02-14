# MongoDB Aggregation Error: Incorrect $group stage

This repository demonstrates a common error in MongoDB aggregation pipelines: using a string instead of an expression in the `$group` stage.  This often results in unexpected behavior or errors.

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected version.  This simple example highlights the importance of using proper expressions within MongoDB aggregation pipelines to ensure accurate and expected results. 