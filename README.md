# validation-bypass

This is a small tool based on a question from chaper 2 of [The Web Application Hackers Handbook](http://mdsec.net/wahh/).

Input submitted in a form is sanitized in the following way:

1. Any <script> tags are removed
2. The input is truncated to 50 charecters
3. Any quotation marks are removed
4. The input is URL-decoded
5. If anything was deleted, repeat the sanitization from step 1.

The challenge is to get the following string past the validator:

"><script>alert("foo")</script>
