# Security Specification - Arami Syriac App

## 1. Data Invariants
- Each user profile `/users/{userId}` is linked strictly to the authenticated user's ID.
- User files inside `/users/{userId}/files/{fileId}` must only be uploaded, read, or deleted by the authorized owner.
- A user can only store, search, and delete vocabulary entries mapped to their own user scope `/users/{userId}/vocabulary/{wordId}`.
- String fields (like file content base64, syllabuses, vocabulary, and profile parameters) are strictly capped in size to prevent denial-of-wallet Attacks.

## 2. The Dirty Dozen Payloads (Security Edge Cases Denied)
1. **Malicious Ownership Spoofing**: Attempting to create a user profile under `/users/attackerId` where the `userId` in payload is `victimId`.
2. **File Hijacking**: Trying to write a file at `/users/victimId/files/file1` with an active auth session of `attackerId`.
3. **Cross-User Vocabulary Poisoning**: Writing a vocabulary card into `/users/victimId/vocabulary/word1` by an authenticated hacker.
4. **Huge File Size Flood**: Writing a file payload where `fileSize` is declared as `-5000` or `100_000_000` to break database constraints.
5. **Base64 Payload Overflow**: Uploading a base64 `fileData` string that is larger than 3MB.
6. **Immutability Breach**: Updating a file item where the `uploadDate` is changed from the original creation timestamp.
7. **Orphaned User Creation**: Writing a profile without a `createdAt` timestamp.
8. **Malicious ID Injection**: Creating a document with non-alphanumeric special characters as ID.
9. **Anomalous Category Injection**: Saving a vocabulary word with an excessively long word category (more than 50 characters).
10. **Unauthenticated Read Attempt**: Trying to retrieve files at `/users/victimId/files/` without an active session.
11. **Shadow Field Injection**: Saving an extra field `isAdmin: true` in userProfile.
12. **Timestamp Forgery**: Submitting `uploadDate` as a manual string instead of the Server Timestamp.

## 3. Recommended Tests
Our security tests ensure `PERMISSION_DENIED` is triggered on unauthorized reads or writes.
