/**
Q2. Write the REST API endpoints for products consisting of (id, name, price) where
the price is in dollars.
The products now consist of (id, name, price, currency).
Define how will you apply this change, considering that
-API is in production.
-Other clients are using the existing API.
*/

/**
answer:
We should have different versions of API if we’re making any changes to them that may break clients.
The versioning can be done according to semantic version like most apps do nowadays.
This way, we can gradually phase out old endpoints instead of forcing everyone to move to the new API 
at the same time. The v1 endpoint can stay active for people who don’t want to change, while the v2, 
with its shiny new features, can serve those who are ready to upgrade. This is especially important 
if our API is public. We should version them so that we won’t break third party apps that use our APIs.
We should also have some changes in products service that will be applied to the v2 endpoint.
*/
