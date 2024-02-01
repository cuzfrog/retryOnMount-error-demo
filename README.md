## To show the problem:

start the server `npm run dev`, and open the browser

## Why?

When 2 queries with the same key, the child query's retry propagates the effect to the parent query, which apparently violates the flow direction.
