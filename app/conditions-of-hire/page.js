import Layout from "@/components/layout/Layout"

export const metadata = {
  title: 'Conditions of Hire - Metropolitan Security Services Melbourne',
  description: 'Review the conditions of hire for Metropolitan Security\'s professional security guard services in Melbourne.',
}

export default function ConditionsOfHirePage() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="CONDITIONS OF HIRE">
                <div>
                    {/*===== Hero Section =====*/}
                    <div className="about-inner bg-28 section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-8 mx-auto text-center">
                                    <div className="heading2 no-margin-heading">
                                        <small className="heading-top inner-heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="Handshake icon" />
                                            Hire Agreement Information
                                        </small>
                                        <h1>CONDITIONS OF HIRE</h1>
                                        <p className="lead">
                                            These conditions govern the hire of security personnel from Metropolitan Security Services. 
                                            Please review carefully before engaging our services.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Key Conditions Section =====*/}
                    <div className="key-conditions-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="Handshake icon" />
                                            Important Hire Conditions
                                        </small>
                                        <h2>KEY HIRING CONDITIONS</h2>
                                        <p>Essential conditions that apply when hiring our security personnel.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="condition-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-header text-white text-center py-3" style={{backgroundColor: '#243D31'}}>
                                                <h5 className="mb-0"><i className="bi bi-eye me-2"></i>Supervision</h5>
                                            </div>
                                            <div className="card-body p-4">
                                                <p>The client is responsible for the onsite supervision and direction of our on-hired staff. It is also the client responsibility to provide a safe workplace for our employees, abiding by the Occupational Health and Safety Act 1985 and any other relevant industry regulations.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="condition-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-header text-white text-center py-3" style={{backgroundColor: '#243D31'}}>
                                                <h5 className="mb-0"><i className="bi bi-person-check me-2"></i>Client Obligations</h5>
                                            </div>
                                            <div className="card-body p-4">
                                                <p>The client acknowledges that our employees and independent contractors are hired at the client's request, to perform the work that has been requested. From the time that our employees or independent contractors report to the client for their duties they are under the care, control and supervision of the client for the duration of the assignment.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="condition-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-header text-white text-center py-3" style={{backgroundColor: '#FDC24C', color: '#243D31'}}>
                                                <h5 className="mb-0"><i className="bi bi-briefcase me-2"></i>Permanent Placements</h5>
                                            </div>
                                            <div className="card-body p-4">
                                                <p>Under no circumstances can the client offer and/or directly approach to offer and/or employ any of Metropolitan Guard Services personnel without the direct approval of Metropolitan Guard Services management, in any such circumstances whereas any one or more of Metropolitan Guard Services personnel is/are offered and/or accepts direct employment with the client (whether or not approval has been granted). The client accepts that they will be liable and immediately invoiced for a placement fee equal to 160 hours of each person's charge rate.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="condition-card h-100">
                                        <div className="card bg-white shadow-lg border-0 h-100">
                                            <div className="card-header text-white text-center py-3" style={{backgroundColor: '#FDC24C', color: '#243D31'}}>
                                                <h5 className="mb-0"><i className="bi bi-calendar-check me-2"></i>Booking Conditions</h5>
                                            </div>
                                            <div className="card-body p-4">
                                                <p>Customers need to email 48 hours prior to commencement date & time for booking details confirmation. The rates are inclusive of payroll tax, superannuation, work cover and public liability of 10M. Booking confirmation will be made on receipt of payment and on the basis of details provided by client at the time of booking. Metropolitan Guard Services management reserve the right to cancel booking at any time if details provided by client are incorrect or unsatisfactory.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Payment Terms Section =====*/}
                    <div className="payment-terms-section bg-28 section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="mr50">
                                        <div className="heading2 no-margin-heading">
                                            <small className="heading-top inner-heading-top">
                                                <img src="/assets/img/icons/hands.svg" alt="Handshake icon" />
                                                Payment Information
                                            </small>
                                            <h2>PAYMENT TERMS & CONDITIONS</h2>
                                            <p>
                                                As we are obligated to pay all personnel weekly, our terms of Pre-Paid net are critical to our ongoing service.
                                            </p>
                                            <div className="payment-list mt-4">
                                                <div className="payment-item d-flex align-items-center mb-3">
                                                    <div className="check-icon mr-3">
                                                        <i className="bi bi-file-text" style={{fontSize: '20px', color: '#243D31'}}></i>
                                                    </div>
                                                    <span><strong>Invoices:</strong> All invoice enquiries / discrepancies must be addressed within 7 days of invoice date. The client will ensure that whereas a dispute may relate to a specific invoice that this will in no way delay in any way, the payment of all remaining and/or outstanding monies that are due and payable within the agreed terms.</span>
                                                </div>
                                                <div className="payment-item d-flex align-items-center mb-3">
                                                    <div className="check-icon mr-3">
                                                        <i className="bi bi-exclamation-triangle-fill" style={{fontSize: '20px', color: '#dc3545'}}></i>
                                                    </div>
                                                    <span><strong>Overdue Accounts:</strong> Overdue accounts may incur an administration fee on balance in excess of 07 days. Any expenses, costs or disbursements incurred by Metropolitan Guard Services in recovering any outstanding monies including debt collection agency fees and legal costs will be charged to the client.</span>
                                                </div>
                                                <div className="payment-item d-flex align-items-center mb-3">
                                                    <div className="check-icon mr-3">
                                                        <i className="bi bi-credit-card-fill" style={{fontSize: '20px', color: '#28a745'}}></i>
                                                    </div>
                                                    <span><strong>Pre-Paid Terms:</strong> Critical for ongoing service delivery</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="stats-grid ml50">
                                        <div className="row">
                                            <div className="col-6 mb-4">
                                                <div className="stat-box text-center p-4 bg-white rounded shadow">
                                                    <div className="stat-number text-warning" style={{fontSize: '2.5rem', fontWeight: 'bold'}}>
                                                        7
                                                    </div>
                                                    <div className="stat-label">Days for Invoice Queries</div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-4">
                                                <div className="stat-box text-center p-4 bg-white rounded shadow">
                                                    <div className="stat-number text-success" style={{fontSize: '2.5rem', fontWeight: 'bold'}}>
                                                        48hr
                                                    </div>
                                                    <div className="stat-label">Booking Notice Required</div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-4">
                                                <div className="stat-box text-center p-4 bg-white rounded shadow">
                                                    <div className="stat-number text-primary" style={{fontSize: '2.5rem', fontWeight: 'bold'}}>
                                                        $10M
                                                    </div>
                                                    <div className="stat-label">Public Liability Cover</div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-4">
                                                <div className="stat-box text-center p-4 bg-white rounded shadow">
                                                    <div className="stat-number text-danger" style={{fontSize: '2.5rem', fontWeight: 'bold'}}>
                                                        160hr
                                                    </div>
                                                    <div className="stat-label">Placement Fee Rate</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== General Terms Content Section =====*/}
                    <div className="general-terms-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="Handshake icon" />
                                            Comprehensive Agreement Terms
                                        </small>
                                        <h2>GENERAL TERMS</h2>
                                        <p>Detailed terms and conditions governing our security service agreements.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="terms-content bg-white p-5 rounded shadow-lg">
                                        
                                        {/*===== Supply Agreement =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                1. SUPPLY AGREEMENT
                                            </h3>
                                            <ol className="terms-list">
                                                <li>This Agreement (as varied from time to time in accordance with its terms) shall apply to each provision of Goods and Services by Metropolitan Guards Services ("MGS") to you and is constituted by the General Terms and MGS's standard pricing, and if applicable, the Specific Terms and any Proposal.</li>
                                                <li>The General Terms of this Agreement shall apply to all supplies by MGS to You. The Specific Terms shall apply to the specific goods or services requested by you, and where inconsistent with the General Terms, the Specific Terms shall take precedence.</li>
                                                <li>MGS is in agreement with independent contractor such as State Security Solutions Pty Ltd having ABN: 47 622 754 723 to supply manpower security services to its client, The client authorize MGS to use independent contractor where services required.</li>
                                            </ol>
                                        </div>

                                        {/*===== Requests and Pricing =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                2. REQUESTS, PROPOSALS AND PRICING OF FEES
                                            </h3>
                                            <ol className="terms-list">
                                                <li>You may request MGS to provide any Goods or Services to You. MGS is not obliged to provide any Goods or Services to You but may in its discretion supply such Goods or Services subject to this Agreement and MGS's standard pricing, in which case the Fees will be in accordance with the standard pricing as varied from time to time.</li>
                                                <li>Prior to supply MGS may in its discretion provide a Proposal to you setting out pricing which is different to the standard pricing. If you accept a Proposal, the Fees will be as set out in a Proposal, subject to variation in accordance with this Agreement.</li>
                                                <li>MGS may vary the specific Service offerings in a Proposal from time to time in its absolute discretion, and in such instances, the Fees will be varied accordingly.</li>
                                                <li>Where You request MGS to carry out any additional work not covered by the terms of a Proposal then the additional work shall be subject to these terms unless expressly otherwise provided and the Fees shall be increased by the amount quoted for such extra work, or if no fee is quoted, an amount calculated at MGS's standard pricing.</li>
                                            </ol>
                                        </div>

                                        {/*===== Payment of Fees =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                3. PAYMENT OF FEES
                                            </h3>
                                            <ol className="terms-list">
                                                <li>You shall pay MGS the Fees on or prior to the delivery of the Goods or Services requested by you. If Goods or Services are supplied to you prior to payment, then you are obliged to pay for those Goods or Services from the date of supply.</li>
                                                <li>If MGS grants You payment terms or credit in writing signed by an authorized officer of MGS, or otherwise sets out different payment terms in a Proposal, then such terms will vary clause 3.1 above.</li>
                                                <li>The Fees charged for Goods and/or Services may be varied by MGS from time to time by notice to you. This will apply even if you accept a Proposal, but only to Goods or Services supplied after the notice of variation.</li>
                                                <li>MGS shall have the right to charge interest on the outstanding amount at the rate of 2% above the 30-day bank bill rate specified by Banking Corporation at the relevant time. Interest accrues daily from (and including) the due date to (but excluding) the date of actual payment and is calculated on actual days elapsed and a year of 365 days. You will be required to pay all Fees due to MGS upon receipt of this notice and you will be charged the reasonable cost of all expenses, including legal costs incurred in the enforcement of the notice of default.</li>
                                            </ol>
                                        </div>

                                        {/*===== GST =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                4. GST
                                            </h3>
                                            <ol className="terms-list">
                                                <li>Where a supply under these terms and conditions is or becomes subject to a GST, an amount equal to the GST paid or payable in respect of that supply shall be added to the amount exclusive of GST paid or payable for that supply under these terms and conditions.</li>
                                                <li>The provisions contained in clause 4.1 apply notwithstanding any other clause of these terms and conditions whatsoever;</li>
                                                <li>Each party agrees to do all things, including providing invoices and other documentation that may be necessary or desirable to enable or assist the other party to claim any credit, set-off, rebate or refund in relation to any amount of GST paid or payable in respect of any supply under these terms and conditions.</li>
                                                <li>In this clause GST has the meaning it has in A New Tax System (Goods and Services Tax) Act 1999 (Cwlth).</li>
                                            </ol>
                                        </div>

                                        {/*===== Term and Termination =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                5. TERM AND TERMINATION
                                            </h3>
                                            <ol className="terms-list">
                                                <li>A Proposal may specify a minimum term for the supply of Services. Upon expiration of a minimum term this Agreement will remain in force until a party gives one (1) months written notice to the other party of termination. MGS may terminate prior to the expiry of a minimum term at any time by providing Seven (1) month written notice to you.</li>
                                                <li>Either party may terminate a supply if:
                                                    <ol type="a">
                                                        <li>the other party commits any material or persistent breach of its obligations under this Agreement which in the case of a breach capable of remedy, shall not have been remedied within 14 days of receipt by the party in breach of a notice identifying the breach and requiring its remedy or such other reasonable period depending on the circumstances); or</li>
                                                        <li>The other becomes insolvent or where an individual becomes bankrupt or enters a scheme or arrangement with creditors.</li>
                                                    </ol>
                                                </li>
                                                <li>Termination under this clause must be affected by written notice served on the other party. Termination under this clause shall be without prejudice to any rights that may have accrued for either of the parties before termination and all sums due under this Agreement shall become payable in full when termination takes effect.</li>
                                                <li>If you wish to terminate or cancel a supply of Services prior to the expiry of the minimum term, you will be required to pay the remaining payments up to the end of the minimum term.</li>
                                                <li>MGS may suspend provision of Services immediately and for such period as MGS considers appropriate if any monies owing to MGS are due and unpaid.</li>
                                            </ol>
                                        </div>

                                        {/*===== Termination prior to supply =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                6. TERMINATION PRIOR TO SUPPLY
                                            </h3>
                                            <ol className="terms-list">
                                                <li>MGS may terminate this Agreement, or a Proposal, in full or in relation to specific Goods or Services, immediately if, in its absolute discretion, the provision of the Services at any of Your Sites poses a risk to any of MGS's personnel.</li>
                                                <li>MGS may also immediately terminate this Agreement or a Proposal, if it has reasonable grounds to believe you are insolvent.</li>
                                            </ol>
                                        </div>

                                        {/*===== Liability =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                7. LIABILITY
                                            </h3>
                                            <ol className="terms-list">
                                                <li>This Agreement shall be subject to any rights conferred upon MGS and You by the Competition and Consumer Act 2010 or similar legislation which cannot by agreement or otherwise be excluded, restricted or modified. Where any warranty or condition cannot be excluded then liability shall be limited to, at the election of MGS, re supply or the payment of the cost of resupply of any goods or services in breach of such warranty or condition.</li>
                                                <li>MGS will not be liable to You for:
                                                    <ol type="a">
                                                        <li>failing to supply any of the Goods or Services as a consequence of strikes, labour disputes, fires, floods, other extreme weather conditions, accidents, invasions, riots, mobs, wars, national emergencies, significant or sustained disruption to power services, embargoes or restraints or any other circumstances beyond the reasonable control of MGS such as unusually high occurrence of Alarm Responses;</li>
                                                        <li>Any indirect, consequential, special or economic loss, cost or liability; or</li>
                                                        <li>any loss of profit, loss of use, loss of income, loss of rental or other benefit, loss of production, loss of actual or potential business opportunity or loss to reputation; or</li>
                                                        <li>any loss or damage suffered by You except if such loss or damage is caused solely and exclusively by the MGS employee</li>
                                                        <li>any loss, damage or destruction of keys, key cards or other access device provided by You to MGS, including but not limited to replacement of locks or reprogramming of access devices. Notwithstanding MGS agrees to pay for the replacement cost of key, key card, if such loss, damage or destruction is caused solely by MGS employee.</li>
                                                    </ol>
                                                </li>
                                                <li>In any event, liability of MGS whether in contract, tort (including negligence) or otherwise will be limited to a maximum amount equal to the Fees paid to MGS on daily basis, in respect of the aggregate of all claims arising out of or in relation to any one event or series of events.</li>
                                                <li>You shall notify MGS in writing of any claim within 7 days of the day upon which you became aware of or ought to have become aware of the existence of such claim. If no such notice is given you will be deemed to have waived and abandoned completely any such claim which after the expiration of such period of 7 days shall not be allowable or admitted. Time shall be of the essence of this clause.</li>
                                                <li>You shall keep MGS indemnified at all times against any loss arising from claims made against MGS by any party with respect to any theft, loss, damage, destruction, death or injury occurring on the Site arising out of or in any way in relation to the provision or failure to provide the Services except in the case of negligence on the part of MGS, its employees or agents.</li>
                                                <li>MGS shall to the maximum extent permitted by law have no liability whatsoever to You in respect of any act or omission on its part for any work required to be undertaken by MGS pursuant to this Agreement if the circumstances or event which would otherwise give rise to liability occurs at a time when You is in breach of its payment obligations to MGS.</li>
                                            </ol>
                                        </div>

                                        {/*===== Your Sites =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                8. YOUR SITES
                                            </h3>
                                            <ol className="terms-list">
                                                <li>You authorizes MGS and its representatives to enter Your Sites for the purpose of this Agreement.</li>
                                                <li>You warrant that each of Your Sites is a safe place of work and free of harmful materials, infections or building diseases.</li>
                                                <li>Clients will be responsible for a risk management plan prior to the commencement of a security activity.</li>
                                            </ol>
                                        </div>

                                        {/*===== Intellectual Property =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                9. INTELLECTUAL PROPERTY
                                            </h3>
                                            <ol className="terms-list">
                                                <li>MGS retain all rights, title and interest subsisting in any design(s), documentation, diagrams or plans and other information and materials ("MGS Materials") supplied to you for the purposes of carrying out the Services under this Agreement.</li>
                                                <li>Where You supply any design(s), documentation, diagrams or plans and other information and materials ("Customer Materials") under this Agreement, You retain all right, title and interest in such Customer Materials but grant MGS a perpetual, irrevocable, royalty free non-exclusive license to use, reproduce and modify You Materials to enable MGS to fulfil its obligations under this Agreement. You agree to accept full responsibility for all Customer Materials provided to MGS under this Agreement and agrees to indemnify MGS for any action, claim, liability, cost or expense arising out of any threatened or actual infringement of intellectual property rights arising out of the use by MGS of You Materials</li>
                                            </ol>
                                        </div>

                                        {/*===== Dispute Resolution =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                10. DISPUTE RESOLUTION
                                            </h3>
                                            <ol className="terms-list">
                                                <li>The parties agree that they must initially use all reasonable endeavours to resolve any dispute arising under this Agreement within 10 business days of a party being advised by written notice of such a dispute.</li>
                                                <li>If the parties are unable to resolve the dispute within that time frame, they must refer the dispute to an executive officer from each party to resolve. The parties will again use all reasonable endeavours to resolve the dispute within a further 10 business days or such other reasonable period agreed between the parties.</li>
                                                <li>If the dispute is not resolved in accordance with sub clause 2, the parties may either agree to refer the matter to Mediation or some other form of alternative dispute resolution or commence legal proceedings.</li>
                                            </ol>
                                        </div>

                                        {/*===== Force Majeure =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                11. FORCE MAJEURE
                                            </h3>
                                            <ol className="terms-list">
                                                <li>MGS will not be in breach of this Agreement or be liable to the other party if MGS fail to perform or delay in the performance of an obligation as a result of an event beyond MGS's reasonable control, including but not limited to strikes, industrial disputes, fire, flood, act of God, war, insurrection, vandalism, sabotage, invasion, riot, national emergency, piracy, hijack, acts of terrorism, embargoes or restraints, weather or traffic condition's (including peak hour traffic), temporary closure of roads, legislation, regulation, order or other act of any government or governmental agency.</li>
                                            </ol>
                                        </div>

                                        {/*===== Disclosure and use of Personal Information =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                12. DISCLOSURE AND USE OF PERSONAL INFORMATION
                                            </h3>
                                            <p>By entering into this Agreement, you agree that unless indicated otherwise in a Proposal, that MGS may forward to You from time to time promotional material and information regarding any of MGS's security goods and services.</p>
                                            <ol className="terms-list">
                                                <li>MGS may collect your personal information for the purpose of providing you with the services under this Agreement and information regarding MGS's security products and systems in accordance with the Privacy Act 1988. MGS may disclose your personal information to other organizations that assist MGS in the provision of these services including related bodies corporate, subcontractors and relevant banking or financial authorities.</li>
                                            </ol>
                                        </div>

                                        {/*===== Credit Enquiries and Credit terms =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                13. CREDIT ENQUIRIES AND CREDIT TERMS
                                            </h3>
                                            <ol className="terms-list">
                                                <li>You agree that if MGS requires financial information about you for any application for credit on terms which attract the operation of the Privacy Act 1998, by seeking or enquiring about credit, you specifically agree and acknowledge that MGS may:
                                                    <ol type="a">
                                                        <li>Disclose to a credit reporting agency certain personal information about you including information contained in this application. Your identification, the amount of credit applied for, payments overdue by more than 60 days, advise the payments are no longer overdue, a serious credit infringement which MGS believe You have committed; and the discharge of the credit facility (if granted one);</li>
                                                        <li>In assessing the application for credit and any later request for credit, MGS may obtain from a credit reporting agency a credit report containing personal credit information, information about commercial activities or commercial worthiness;</li>
                                                        <li>Provide to or obtain from any credit provider(s) named in credit report information about your personal or commercial credit arrangements including information relating to credit worthiness, credit standing, credit history; or credit capacity.</li>
                                                    </ol>
                                                </li>
                                                <li>If MGS approve your application for credit, your consent and acknowledgement in this Agreement will remain in force until the full amount owing to MGS under the credit facility is paid.</li>
                                            </ol>
                                        </div>

                                        {/*===== PPSR =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                14. PPSR
                                            </h3>
                                            <ol className="terms-list">
                                                <li>Terms used in this clause are defined in the Personal Property Securities Act 2009 (Cth).</li>
                                                <li>If you request the supply of Services on credit terms, or are supplied Services prior to payment in full, then
                                                    <ol type="a">
                                                        <li>You grant to MGS a security interest in all of your property including after-acquired property; and</li>
                                                        <li>You indemnify MGS for the cost of registration and enforcement of the PPS Lease.</li>
                                                    </ol>
                                                </li>
                                                <li>If you request the supply of Goods on credit terms, or are supplied Goods prior to payment in full, then
                                                    <ol type="a">
                                                        <li>MGS will retain title to such Goods until you have paid for those Goods;</li>
                                                        <li>You grant to MGS a purchase money security interest ("PMSI") in those Goods; and</li>
                                                        <li>You indemnify MGS for the cost of registration and enforcement of the PMSI.</li>
                                                    </ol>
                                                </li>
                                                <li>If we supply you Goods on a lease for a period of 12 months or more, or a period of 90 days or more for serial numbered goods, then:
                                                    <ol type="a">
                                                        <li>MGS grants to you a PPS Lease in respect of those Goods; and</li>
                                                        <li>You indemnify MGS for the cost of registration and enforcement of the PPS Lease.</li>
                                                    </ol>
                                                </li>
                                            </ol>
                                        </div>

                                        {/*===== Miscellaneous =====*/}
                                        <div className="terms-section mb-5">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                15. MISCELLANEOUS
                                            </h3>
                                            <ol className="terms-list">
                                                <li><strong>No Strike breaking etc.</strong> You may not request MGS's employees to carry out any illegal duties, including but not limited to strike breaking.</li>
                                                <li><strong>Non solicitation.</strong> You will not, from the date of this Agreement to twelve months after completion of the provision of services by MGS, solicit, employ or contract any employee or contractor of MGS. You agree that if you employ or engage any person directly, contrary to this clause You shall be liable to pay to MGS liquidated damages in a once off amount equal to 30% of such person's annual salary or annualized contracted amount (if a contractor) at the time of departing MGS even if they have been employed or contracted by another organization after departing MGS and prior to being engaged or employed by the Client.</li>
                                                <li><strong>Confidentiality.</strong> Each party shall treat as confidential all information which comes into its possession, pursuant to or as a result of or in the performance of this Agreement, whether such information relates to the business, sales, marketing or technical operations of the other Party or the clientele of the other Party or otherwise. Neither Party shall, without the written permission of the other, disclose such confidential information to a third party.</li>
                                                <li><strong>Entire Agreement.</strong> This Agreement constitutes the entire agreement between the parties and supersedes all prior representations, contracts, statements and understandings, whether verbal or in writing. All other terms and conditions are excluded to the fullest extent permitted by law including any terms and conditions which you may seek to impose. The terms, provisions and conditions of this Agreement may only be varied by agreement in writing signed by an authorized representative of MGS.</li>
                                                <li><strong>No Waiver.</strong> No right under this Agreement will be deemed to be waived except by notice in writing signed by each party and any failure by MGS to enforce any clause of this Agreement, will not be construed as a waiver of MGS's rights under this Agreement.</li>
                                                <li><strong>Severability.</strong> Should any part of this Agreement for any reason be held to be invalid, unenforceable or illegal, such judgment or holding will not affect, impair or invalidate the remainder of this Agreement but shall be confined in its operation to the part of this Agreement directly involved in the matter of proceeding and the remainder of this Agreement will remain in full force and effect.</li>
                                                <li><strong>No Set Off.</strong> You may not set off or contract charge any monies owing under this Agreement.</li>
                                                <li><strong>Notice.</strong> Any notice to be given under this agreement must be signed by the party giving the notice or a duly authorized officer. It may be served by delivering the notice personally or by mail or facsimile to the usual or last known address or facsimile number.</li>
                                                <li><strong>No Assignment.</strong> You shall not assign any of your interest in this Agreement without the prior written consent of MGS. MGS may at any time assign, sub-contract or license any part of its rights and obligations under this Agreement.</li>
                                                <li><strong>Acceptance of terms.</strong> You do not need to sign these terms to accept them and requesting MGS to supply Goods or Services will be deemed acceptance of these terms.</li>
                                                <li><strong>Law and Jurisdiction.</strong> This Agreement is subject to the law of New South Wales. The parties submit to the jurisdiction of the courts of New South Wales.</li>
                                                <li><strong>Contractors.</strong> MGS may use contractors time to time in order to fulfill clients contract compliance if opportunity arises.</li>
                                            </ol>
                                        </div>
                                        {/*===== Interpretation =====*/}
                                        <div className="terms-section">
                                            <h3 className="section-title mb-4" style={{color: '#243D31', borderBottom: '2px solid #FDC24C', paddingBottom: '10px'}}>
                                                16. INTERPRETATION
                                            </h3>
                                            <ol className="terms-list">
                                                <li>The section headings in this Agreement are used for convenience only, are not substantive, and shall not be interpreted to define, describe, or otherwise limit the interpretation of the provision under the section headings or of the Agreement as a whole.</li>
                                                <li>In this Agreement:
                                                    <ol type="a">
                                                        <li>Fees means the charge for Goods and Services provided by MGS to You</li>
                                                        <li>Goods means any goods supplied by MGS to You, including but not limited to a security system</li>
                                                        <li>Proposal means a written proposal approved by MGS;</li>
                                                        <li>Services means provided by MGS to you comprising any or all of Security Installation, Monitoring Services, Maintenance Services, Alarm Response Instruction, Alarm Response Services and Additional Services as required from time to time during the term of this Agreement.</li>
                                                    </ol>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}