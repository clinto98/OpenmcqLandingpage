import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Header />
            <div className="container mx-auto px-6 py-24">
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Terms of Service Section */}
                    <section className="space-y-6">
                        <h1 className="text-4xl font-bold text-primary">TERMS OF SERVICE</h1>
                        {/* <p className="text-gray-400">MCQ Solver<br />Last Updated: October 2025</p> */}

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">1. INTRODUCTION & ACCEPTANCE</h2>
                                <p className="text-gray-300 leading-relaxed">
                                    Welcome to MCQ Solver ("App"), operated by finlytyx ("Company," "we," "us," or "our"). These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and finlytyx governing your use of the MCQ Solver mobile application and all associated services.
                                </p>
                                <p className="text-gray-300 leading-relaxed mt-4">
                                    By downloading, installing, accessing, or using MCQ Solver, you acknowledge that you have read, understood, and agree to be bound by these Terms in their entirety. If you do not agree to these Terms, please do not use this App.
                                </p>
                                <div className="mt-4 p-4 bg-gray-900 rounded-lg">
                                    <p className="font-semibold text-white">Contact Information:</p>
                                    <p className="text-gray-400">finlytyx</p>
                                    <p className="text-gray-400">Email: appsupport@finlytyx.com</p>
                                    <p className="text-gray-400">Address: 3rd floor, Room 308, Head-Q Office space, Hi-lite Platino, Road, off National Highway 66, Shankar Nagar, Kannadikkadu, Maradu, Kochi, Kerala 682304, India</p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-4">2. AGE & ELIGIBILITY</h2>
                                <p className="text-gray-300 mb-2">You represent and warrant that:</p>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                                    <li>You are at least 13 years old to use this App</li>
                                    <li>If you are below 18 years old, you confirm your age by checking the age verification checkbox and understand that you are using this App with your own consent</li>
                                    <li>You have the legal capacity to enter into binding agreements in your jurisdiction</li>
                                    <li>You are not prohibited by law from using this App</li>
                                </ul>
                                <p className="text-gray-300 mt-4">We reserve the right to suspend or terminate your account if we discover you do not meet the eligibility requirements.</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-4">3. ACCOUNT REGISTRATION & SECURITY</h2>
                                <h3 className="text-xl font-medium text-white mb-2">3.1 Account Creation</h3>
                                <p className="text-gray-300 mb-2">To access MCQ Solver, you must create an account by providing:</p>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                                    <li>A valid email address</li>
                                    <li>Your name</li>
                                    <li>A secure password</li>
                                    <li>Age verification confirmation</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-2">3.2 Account Responsibility</h3>
                                <p className="text-gray-300 mb-2">You are solely responsible for:</p>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                                    <li>Maintaining the confidentiality of your login credentials</li>
                                    <li>All activities that occur under your account</li>
                                    <li>Ensuring the information you provide is accurate and up-to-date</li>
                                    <li>Notifying us immediately of any unauthorized access or security breaches</li>
                                </ul>
                                <p className="text-gray-300 mb-4">The Company is not responsible for unauthorized access to your account due to your negligence or failure to safeguard your credentials.</p>

                                <h3 className="text-xl font-medium text-white mb-2">3.3 Account Restrictions</h3>
                                <p className="text-gray-300 mb-2">You agree not to:</p>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                                    <li>Share your account credentials with others</li>
                                    <li>Create multiple accounts to exploit free trial periods or subscription limits</li>
                                    <li>Use another person's account</li>
                                    <li>Attempt to gain unauthorized access to the App</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-4">4. SUBSCRIPTION & PAYMENT</h2>
                                <h3 className="text-xl font-medium text-white mb-2">4.1 Subscription Plans</h3>
                                <p className="text-gray-300 mb-2">MCQ Solver offers the following subscription options:</p>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                                    <li>Monthly Plan: ₹199/month</li>
                                    <li>Quarterly Plan: ₹499/3 months</li>
                                    <li>Annual Plan: ₹999/year</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-2">4.2 Limited Free Version</h3>
                                <p className="text-gray-300 mb-4">The free version includes limited features. Full access requires an active subscription or one-time purchase.</p>

                                <h3 className="text-xl font-medium text-white mb-2">4.3 Auto-Renewal</h3>
                                <p className="text-gray-300 mb-4">Your subscription will automatically renew at the end of each billing cycle using your saved payment method unless you cancel before the renewal date.</p>

                                <h3 className="text-xl font-medium text-white mb-2">4.4 Cancellation</h3>
                                <p className="text-gray-300 mb-4">You can cancel your subscription anytime through your account settings. Cancellation will take effect at the end of your current billing cycle. You will not receive a refund for the remaining subscription period.</p>

                                <h3 className="text-xl font-medium text-white mb-2">4.5 No Refund Policy</h3>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                                    <li>No refunds are provided for:
                                        <ul className="list-circle pl-6 mt-2 space-y-1">
                                            <li>Cancelled subscriptions</li>
                                            <li>Partial subscription periods</li>
                                            <li>One-time purchases</li>
                                            <li>Any reason, including accidental purchases</li>
                                        </ul>
                                    </li>
                                </ul>
                                <p className="text-gray-300 mb-4">All transactions are final and non-refundable.</p>

                                <h3 className="text-xl font-medium text-white mb-2">4.6 Price Changes</h3>
                                <p className="text-gray-300 mb-4">We reserve the right to modify subscription prices with 30 days' notice. Price changes will apply to renewals after the notice period.</p>

                                <h3 className="text-xl font-medium text-white mb-2">4.7 Payment Processing</h3>
                                <p className="text-gray-300">Payments are processed securely through authorized payment gateways. By providing payment information, you authorize the Company to charge your payment method for the subscription fees.</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-4">5. INTELLECTUAL PROPERTY RIGHTS</h2>
                                <h3 className="text-xl font-medium text-white mb-2">5.1 Content Ownership</h3>
                                <p className="text-gray-300 mb-4">All MCQ questions, explanations, content, and materials within MCQ Solver (including but not limited to questions, answers, solutions, and learning materials) are the exclusive property of finlytyx and are protected by copyright laws.</p>

                                <h3 className="text-xl font-medium text-white mb-2">5.2 Grant of License</h3>
                                <p className="text-gray-300 mb-4">We grant you a limited, non-exclusive, non-transferable, revocable license to use MCQ Solver solely for your personal, non-commercial educational purposes.</p>

                                <h3 className="text-xl font-medium text-white mb-2">5.3 Restrictions</h3>
                                <p className="text-gray-300 mb-2">You agree not to:</p>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                                    <li>Reproduce, copy, distribute, or transmit any content without prior written permission</li>
                                    <li>Sell, rent, lease, or otherwise commercialize the App or its content</li>
                                    <li>Reverse engineer, decompile, or attempt to derive the source code</li>
                                    <li>Remove or alter any copyright, trademark, or proprietary notices</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-4">6. USER CONDUCT & PROHIBITIONS</h2>
                                <p className="text-gray-300 mb-2">You agree not to use MCQ Solver for any unlawful purpose or in any way that violates these Terms. Specifically, you will not:</p>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                                    <li>Engage in harassment, threats, abuse, or defamation</li>
                                    <li>Attempt to gain unauthorized access to the App or its systems</li>
                                    <li>Introduce viruses, malware, or any harmful code</li>
                                    <li>Violate any applicable laws or regulations</li>
                                    <li>Infringe upon intellectual property rights</li>
                                    <li>Attempt to bypass security measures</li>
                                    <li>Use the App for commercial purposes without authorization</li>
                                    <li>Create or use automated tools, bots, or scrapers</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-4">7. LIMITATION OF LIABILITY</h2>
                                <h3 className="text-xl font-medium text-white mb-2">7.1 Disclaimer of Warranties</h3>
                                <p className="text-gray-300 mb-2">MCQ Solver is provided "AS IS" and "AS AVAILABLE" without any warranties, express or implied. We do not warrant:</p>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                                    <li>Uninterrupted or error-free operation</li>
                                    <li>Accuracy, completeness, or correctness of all content</li>
                                    <li>Fitness for a particular purpose</li>
                                    <li>Non-infringement of third-party rights</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-2">7.2 Educational Purpose Disclaimer</h3>
                                <p className="text-gray-300 mb-2">MCQ Solver is designed as a supplementary learning tool. While we strive to maintain accurate content, we do not guarantee that:</p>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                                    <li>All exam preparation will result in passing exams</li>
                                    <li>Content is 100% accurate or covers all exam topics</li>
                                    <li>Using this App will lead to academic success</li>
                                    <li>Content is always current with curriculum changes</li>
                                </ul>
                                <p className="text-gray-300 mb-4">Users should verify information from official sources and consult educators for comprehensive exam preparation.</p>

                                <h3 className="text-xl font-medium text-white mb-2">7.3 Limitation of Damages</h3>
                                <p className="text-gray-300 mb-2">To the maximum extent permitted by law, finlytyx shall not be liable for:</p>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                                    <li>Any indirect, incidental, special, or consequential damages</li>
                                    <li>Loss of profits, data, or business opportunity</li>
                                    <li>Damages arising from your use or inability to use the App</li>
                                    <li>Third-party claims</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-4">8. DATA DELETION & ACCOUNT TERMINATION</h2>
                                <h3 className="text-xl font-medium text-white mb-2">8.1 Account Deletion</h3>
                                <p className="text-gray-300 mb-2">You can request to delete your account anytime through the App settings. Upon deletion:</p>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                                    <li>Your account will be immediately terminated</li>
                                    <li>All your personal data and quiz performance records will be permanently deleted</li>
                                    <li>You cannot recover this data after deletion</li>
                                    <li>Any remaining subscription balance will not be refunded</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-2">8.2 Data Export</h3>
                                <p className="text-gray-300 mb-4">We do not provide an option to download or export your data before deletion. Please save any information you wish to retain before requesting account deletion.</p>

                                <h3 className="text-xl font-medium text-white mb-2">8.3 Company's Right to Terminate</h3>
                                <p className="text-gray-300 mb-2">finlytyx reserves the right to suspend or terminate your account if:</p>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                                    <li>You violate these Terms</li>
                                    <li>You engage in prohibited conduct</li>
                                    <li>We suspect fraud or unauthorized access</li>
                                    <li>You fail to pay subscription fees</li>
                                    <li>Required by law or legal process</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-4">9. THIRD-PARTY SERVICES</h2>
                                <p className="text-gray-300 mb-2">MCQ Solver uses Firebase (Google LLC) for:</p>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                                    <li>User authentication</li>
                                    <li>Data storage</li>
                                    <li>Cloud services</li>
                                </ul>
                                <p className="text-gray-300">By using MCQ Solver, you agree to be bound by Firebase's Terms of Service and Privacy Policy. We are not responsible for Firebase's practices or any third-party services' terms.</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-4">10. GOVERNING LAW</h2>
                                <p className="text-gray-300">These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. You agree that any legal action or proceeding relating to these Terms shall be exclusively subject to the jurisdiction of courts located in Kerala, India.</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-4">11. CONTACT US</h2>
                                <p className="text-gray-300 mb-4">For questions, concerns, or requests regarding these Terms of Service, please contact:</p>
                                <div className="p-4 bg-gray-900 rounded-lg">
                                    <p className="text-gray-400">finlytyx</p>
                                    <p className="text-gray-400">Email: appsupport@finlytyx.com</p>
                                    <p className="text-gray-400">Address: 3rd floor, Room 308, Head-Q Office space, Hi-lite Platino, Road, off National Highway 66, Shankar Nagar, Kannadikkadu, Maradu, Kochi, Kerala 682304, India</p>
                                </div>
                                <p className="text-gray-300 mt-4">By using MCQ Solver, you acknowledge that you have read and agree to these Terms of Service.</p>
                            </div>
                        </div>
                    </section>

                    <div className="border-t border-gray-800 my-12"></div>

                    {/* Privacy Policy Section */}
                    <section className="space-y-6">
                        <h1 className="text-4xl font-bold text-primary">PRIVACY POLICY</h1>
                        {/* <p className="text-gray-400">MCQ Solver<br />Last Updated: October 2025</p> */}

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">1. INTRODUCTION</h2>
                                <p className="text-gray-300 leading-relaxed">
                                    finlytyx ("Company," "we," "us," "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and store your personal information when you use the MCQ Solver mobile application ("App").
                                </p>
                                <p className="text-gray-300 leading-relaxed mt-4">
                                    Please read this Privacy Policy carefully. By accessing or using MCQ Solver, you consent to the practices described herein. If you do not agree with our practices, please do not use the App.
                                </p>
                                <div className="mt-4 p-4 bg-gray-900 rounded-lg">
                                    <p className="font-semibold text-white">Contact Information:</p>
                                    <p className="text-gray-400">finlytyx</p>
                                    <p className="text-gray-400">Email: appsupport@finlytyx.com</p>
                                    <p className="text-gray-400">Address: 3rd floor, Room 308, Head-Q Office space, Hi-lite Platino, Road, off National Highway 66, Shankar Nagar, Kannadikkadu, Maradu, Kochi, Kerala 682304, India</p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-4">2. INFORMATION WE COLLECT</h2>
                                <h3 className="text-xl font-medium text-white mb-2">2.1 Information You Provide Directly</h3>
                                <p className="text-gray-300 mb-2">When you create an account or use MCQ Solver, we collect the following information:</p>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                                    <li>Email Address: Used for account creation and communication</li>
                                    <li>Full Name: Provided during registration for account identification</li>
                                    <li>Password: Securely encrypted for authentication purposes</li>
                                    <li>Age Verification: Confirmation that you meet minimum age requirements</li>
                                    <li>Payment Information: When subscribing (processed securely by payment gateways; we do not store full credit card details)</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-2">2.2 Information Collected Automatically</h3>
                                <p className="text-gray-300 mb-2">During your use of MCQ Solver, we automatically collect:</p>
                                <p className="text-gray-300 font-medium mt-2">Performance Data:</p>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-2">
                                    <li>Quiz scores and results</li>
                                    <li>Topics attempted</li>
                                    <li>Time spent on questions</li>
                                    <li>Progress tracking</li>
                                    <li>Correct and incorrect answers</li>
                                    <li>Your learning history</li>
                                </ul>
                                <p className="text-gray-300 font-medium mt-2">Account Activity Data:</p>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                                    <li>Login timestamps</li>
                                    <li>Features accessed</li>
                                    <li>Subscription status</li>
                                    <li>Purchase history</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-2">2.3 Information We Do NOT Collect</h3>
                                <p className="text-gray-300 mb-2">We explicitly do NOT collect:</p>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                                    <li>Device information (device type, OS version, etc.)</li>
                                    <li>Location data</li>
                                    <li>Phone number (unless voluntarily provided)</li>
                                    <li>Precise geolocation</li>
                                    <li>Biometric information</li>
                                    <li>Call or messaging data</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-4">3. HOW WE USE YOUR INFORMATION</h2>
                                <p className="text-gray-300 mb-4">We use collected information for the following purposes:</p>

                                <h3 className="text-xl font-medium text-white mb-2">3.1 Service Provision</h3>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                                    <li>Creating and managing your account</li>
                                    <li>Delivering quiz content and personalized learning experience</li>
                                    <li>Processing subscriptions and payments</li>
                                    <li>Providing customer support</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-2">3.2 Improvement & Analytics</h3>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                                    <li>Analyzing app usage patterns</li>
                                    <li>Identifying popular topics and difficulty levels</li>
                                    <li>Improving question quality and content accuracy</li>
                                    <li>Enhancing user experience and app features</li>
                                    <li>Troubleshooting technical issues</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-2">3.3 Communication</h3>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                                    <li>Sending account notifications (password resets, subscription reminders)</li>
                                    <li>Notifying you of policy changes</li>
                                    <li>Responding to your inquiries and support requests</li>
                                    <li>Sending service-related announcements</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-2">3.4 Legal & Security</h3>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                                    <li>Ensuring compliance with Indian laws and regulations</li>
                                    <li>Preventing fraud and unauthorized access</li>
                                    <li>Protecting our intellectual property</li>
                                    <li>Enforcing these Terms of Service</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-2">3.5 What We Do NOT Do</h3>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                                    <li>We do not sell your personal data to third parties</li>
                                    <li>We do not use your data for marketing purposes without consent</li>
                                    <li>We do not share your quiz scores with other users</li>
                                    <li>We do not use your data for targeted advertising</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-4">4. DATA STORAGE & PROTECTION</h2>
                                <h3 className="text-xl font-medium text-white mb-2">4.1 Storage Location</h3>
                                <p className="text-gray-300 mb-2">Your personal information and performance data are stored on:</p>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                                    <li>Firebase Firestore (Google Cloud infrastructure)</li>
                                    <li>Cloud Storage Services associated with our backend</li>
                                </ul>
                                <p className="text-gray-300 mb-4">These services comply with international data security standards.</p>

                                <h3 className="text-xl font-medium text-white mb-2">4.2 Security Measures</h3>
                                <p className="text-gray-300 mb-2">We implement the following security measures:</p>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                                    <li>SSL/TLS encryption for data in transit</li>
                                    <li>Password encryption using industry-standard algorithms</li>
                                    <li>Secure authentication protocols via Firebase</li>
                                    <li>Regular security audits and updates</li>
                                    <li>Access control and authentication mechanisms</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-2">4.3 Limitation of Security</h3>
                                <p className="text-gray-300 mb-4">While we employ industry-standard security measures, no system is 100% secure. We cannot guarantee absolute security of your information. Transmission over the internet carries inherent risks.</p>

                                <h3 className="text-xl font-medium text-white mb-2">4.4 Your Responsibility</h3>
                                <p className="text-gray-300 mb-2">You are responsible for:</p>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                                    <li>Maintaining confidentiality of your login credentials</li>
                                    <li>Logging out after each session</li>
                                    <li>Not sharing account access with others</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-4">5. DATA RETENTION</h2>
                                <h3 className="text-xl font-medium text-white mb-2">5.1 Retention Period</h3>
                                <p className="text-gray-300 mb-2">We retain your personal information and performance data for as long as:</p>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                                    <li>Your account is active</li>
                                    <li>Required by law or for legitimate business purposes</li>
                                    <li>Necessary to provide services</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-2">5.2 Account Deletion</h3>
                                <p className="text-gray-300 mb-2">Upon your request:</p>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                                    <li>Your account will be immediately deactivated</li>
                                    <li>All personal data (email, name, age verification) will be permanently deleted</li>
                                    <li>All performance data (quiz scores, progress, learning history) will be permanently deleted</li>
                                    <li>This deletion is irreversible and cannot be undone</li>
                                </ul>

                                <h3 className="text-xl font-medium text-white mb-2">5.3 Residual Data</h3>
                                <p className="text-gray-300">In rare cases, residual copies may exist in backup systems for 30-90 days before permanent removal.</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-4">6. THIRD-PARTY SERVICES & DATA SHARING</h2>
                                <h3 className="text-xl font-medium text-white mb-2">6.1 Firebase Services</h3>
                                <p className="text-gray-300 mb-2">MCQ Solver uses Google Firebase for:</p>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                                    <li>User authentication</li>
                                    <li>Real-time database (Firestore)</li>
                                    <li>Cloud storage</li>
                                    <li>Analytics</li>
                                </ul>
                                <p className="text-gray-300 mb-4">By using MCQ Solver, you consent to Firebase processing your data according to their terms.</p>

                                <h3 className="text-xl font-medium text-white mb-2">6.2 Payment Processing</h3>
                                <p className="text-gray-300 mb-4">Payment information is processed by authorized payment gateways (UPI, Credit/Debit cards). We do not store complete payment card information. Payment processors are PCI DSS compliant.</p>

                                <h3 className="text-xl font-medium text-white mb-2">6.3 No Third-Party Sharing</h3>
                                <p className="text-gray-300 mb-2">We do NOT share your personal information with:</p>
                                <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                                    <li>Marketing agencies</li>
                                    <li>Advertisers</li>
                                    <li>Social media platforms</li>
                                    <li>Other apps or services</li>
                                    <li>Third-party analytics providers</li>
                                </ul>
                                <p className="text-gray-300 mb-4">Exception: Data may be disclosed if required by law, court order, or legal process.</p>

                                <h3 className="text-xl font-medium text-white mb-2">6.4 Business Transfers</h3>
                                <p className="text-gray-300">If finlytyx is acquired, merged, or dissolved, your information may be transferred as part of that transaction. We will notify you of any such change.</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-4">7. YOUR DATA RIGHTS</h2>
                                <h3 className="text-xl font-medium text-white mb-2">7.1 Access</h3>
                                <p className="text-gray-300 mb-4">You can access your personal information through your account settings at any time.</p>

                                <h3 className="text-xl font-medium text-white mb-2">7.2 Correction</h3>
                                <p className="text-gray-300 mb-4">You can update or correct your personal information (name, email) through account settings.</p>

                                <h3 className="text-xl font-medium text-white mb-2">7.3 Data Deletion</h3>
                                <p className="text-gray-300 mb-4">You can request complete deletion of your account and all associated data through the App settings.</p>

                                <h3 className="text-xl font-medium text-white mb-2">7.4 Limitation</h3>
                                <p className="text-gray-300">Due to our no-refund policy, deletion of your account does not entitle you to any refund for remaining subscription period.</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-4">8. CHILDREN & MINORS</h2>
                                <h3 className="text-xl font-medium text-white mb-2">8.1 Age Verification</h3>
                                <p className="text-gray-300 mb-4">MCQ Solver requires users to be at least 13 years old. Users under 18 must verify their age through the age verification checkbox.</p>

                                <h3 className="text-xl font-medium text-white mb-2">8.2 Parental Consent</h3>
                                <p className="text-gray-300 mb-4">Users below 18 acknowledge using the App of their own accord. Parents/guardians are encouraged to monitor their children's use of the App.</p>

                                <h3 className="text-xl font-medium text-white mb-2">8.3 No Parental Controls</h3>
                                <p className="text-gray-300">MCQ Solver does not currently offer parental dashboard or monitoring features.</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-4">9. CONTACT US & DATA REQUESTS</h2>
                                <p className="text-gray-300 mb-4">For any questions, concerns, or requests regarding your personal data, please contact:</p>
                                <div className="p-4 bg-gray-900 rounded-lg">
                                    <p className="text-gray-400">finlytyx</p>
                                    <p className="text-gray-400">Email: appsupport@finlytyx.com</p>
                                    <p className="text-gray-400">Address: 3rd floor, Room 308, Head-Q Office space, Hi-lite Platino, Road, off National Highway 66, Shankar Nagar, Kannadikkadu, Maradu, Kochi, Kerala 682304, India</p>
                                </div>
                                <p className="text-gray-300 mt-4">Response Time: We will respond to all inquiries within 7-10 business days.</p>
                                <p className="text-gray-300 mt-4">By using MCQ Solver, you acknowledge that you have read and understood this Privacy Policy.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
