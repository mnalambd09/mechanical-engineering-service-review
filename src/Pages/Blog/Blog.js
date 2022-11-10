import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl mb-10">
                <figure><img src="https://i.ibb.co/VTwVNJ5/maxresdefault.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl text-center font-extrabold">Difference between SQL and NOSQL</h2>
                    <h1 className='text-2xl text-orange-600'>1. Language</h1>
                    <p>SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used.
                        The dynamic schemata of NoSQL databases allow representation of alternative structures, often alongside each other, encouraging greater flexibility. There is less emphasis on planning, greater freedom when adding new attributes or fields, and the possibility of varied syntax across databases. As a group, however, NoSQL languages lack the standard interface which SQL provides, so more complex queries can be difficult to execute.Though there are many dialects of SQL, all share a common syntax and almost-identical grammar. When querying relational databases, fluency in one language translates to proficiency in most others. On the other hand, there is very little consistency between NoSQL languages, as they concern a diverse set of unrelated technologies. Many NoSQL databases have a unique data manipulation language constrained by particular structures and capabilities.
                    </p> <br />
                    <h1 className='text-2xl text-orange-600'>2. Scalability</h1>
                    <p>Most SQL databases can be scaled vertically, by increasing the processing power of existing hardware. NoSQL databases use a master-slave architecture which scales better horizontally, with additional servers or nodes. These are useful generalizations, but it’s important to note:

                        SQL databases can be scaled horizontally as well, though sharding or partitioning logic is often the user’s onus and not well supported.
                        NoSQL technologies are diverse and while many rely on the master-slave architecture, options for scaling vertically also exist.
                        Savings made using more efficient data structures can overwhelm differences in scalability; most important is to understand the use case and plan accordingly.
                    </p>
                    <h1 className='text-2xl text-orange-600'>3. Structure</h1>
                    <p>SQL database schemata always represent relational, tabular data, with rules about consistency and integrity. They contain tables with columns (attributes) and rows (records), and keys have constrained logical relationships.

                        NoSQL databases need not stick to this format, but generally fit into one of four broad categories:

                        Column-oriented databases transpose row-oriented RDBMSs, allowing efficient storage of high-dimensional data and individual records with varying attributes.
                        Key-Value stores are dictionaries which access diverse objects with a key unique to each.
                        Document stores hold semi-structured data: objects which contain all of their own relevant information, and which can be completely different from each other.
                        Graph databases add the concept of relationships (direct links between objects) to documents, allowing rapid traversal of greatly connected data sets.
                    </p>
                    <h1 className='text-2xl text-orange-600'>4. Properties</h1>
                    <p>At a high level, SQL and NoSQL comply with separate rules for resolving transactions. RDBMSs must exhibit four “ACID” properties:

                        Atomicity means all transactions must succeed or fail completely. They cannot be partially-complete, even in the case of system failure.
                        Consistency means that at each step the database follows invariants: rules which validate and prevent corruption.
                        Isolation prevents concurrent transactions from affecting each other. Transactions must result in the same final state as if they were run sequentially, even if they were run in parallel.
                        Durability makes transactions final. Even system failure cannot roll-back the effects of a successful transaction.
                        NoSQL technologies adhere to the “CAP” theorem, which says that in any distributed database, only two of the following properties can be guaranteed at once:

                        Consistency: Every request receives the most recent result, or an error. (Note this is different than in ACID)
                        Availability: Every request has a non-error result, regardless of how recent that result is.
                        Partition tolerance: Any delays or losses between nodes will not interrupt the system’s operation.
                    </p>
                    <h1 className='text-2xl text-orange-600'>5. Support and communities</h1>
                    <p>SQL databases represent massive communities, stable codebases, and proven standards. Multitudes of examples are posted online and experts are available to support those new to programming relational data.

                        NoSQL technologies are being adopted quickly, but communities remain smaller and more fractured. However, many SQL languages are proprietary or associated with large single-vendors, while NoSQL communities benefit from open systems and concerted commitment to onboarding users.

                        SQL is available to most major platforms, from operating systems to architectures and programming languages. Compatibility varies more widely for NoSQL, and dependencies need to be investigated more carefully.
                    </p>

                </div>
            </div>


            <div className="card w-full bg-base-100 shadow-xl mb-10">
                <figure><img src="https://i.ibb.co/KKBCVQj/maxresdefault-1.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl text-center font-extrabold">What is JWT and How Dose It Work?</h2>
                    <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

                        Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.</p>

                </div>
            </div>

            <div className="card w-full bg-base-100 shadow-xl mb-10">
                <figure><img src="https://i.ibb.co/5B5pHFk/javascript-vs-nodejs.webp" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl text-center font-extrabold">What is the Difference between javascript and node.js?</h2>
                    <h1 className='text-2xl text-orange-600'>1. NodeJS : </h1>
                    <p>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
                    <h1 className='text-2xl text-orange-600'>2. JavaScript : </h1>
                    <p>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
                </div>
            </div>

            <div className="card w-full bg-base-100 shadow-xl mb-10">
                <figure><img src="https://i.ibb.co/25yMqB2/Node-js-Event-Loop-1.png" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl text-center font-extrabold">How dose node js handle multiple Request at the same time?</h2>
                    <h1 className='text-2xl text-orange-600'>How NodeJS handle multiple client requests?</h1>
                    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module. </p>

                </div>
            </div>
        </div>
    );
};

export default Blog;