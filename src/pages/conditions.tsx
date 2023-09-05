import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ConditionsPrivacyInfo from "@/components/Paragraphs/ConditionsPrivacyInfo";
import React from "react";

const conditionsData = [
  {
    title: "Legal",
    text: "I have read and understand, and do hereby agree to be bound by the Terms of Use and Privacy Policy, including all future amendments thereto. Such agreement is irrevocable and will apply to all my uses of Olivetree Protocol's websites, applications, smart contracts and content without providing confirmation in each instance. I understand that Olivetree Protocol does not endorse or provide any warranty with respect to products, tokens or crypto assets.",
  },
  {
    title: "Terms of Use",
    text: "",
  },
  {
    title: "1. Terms and Conditions",
    text: (
      <div>
        The Olivetree Protocol products and software (the 'Olivetree Protocol
        Products') are a suite of smart contracts on the Ethereum Blockchain
        that include multiple products governed by smart contracts, including,
        but not limited to:
        <ul className="ml-5 my-2">
          <li className="my-0.5">
            • Olivetree Protocol ({" "}
            <a
              href="https://olivetree.finance"
              className="underline underline-offset-4"
            >
              https://olivetree.finance
            </a>{" "}
            ) or ({" "}
            <a
              href="https://olivetree.credit"
              className="underline underline-offset-4"
            >
              https://olivetree.credit
            </a>{" "}
            )
          </li>
        </ul>
        Besides the smart contracts, the websites for the Olivetree Protocol
        Products include additional text, images, audio, code and other
        materials (collectively, the 'Content'). In addition, some of the
        Olivetree Protocol Products include associated tokens and any
        derivatives thereof (the 'Tokens').There are numerous ways the Olivetree
        Protocol Products could fail in an unexpected way, resulting in the
        total and absolute loss in the value of your funds. Please read these
        Terms of Use (the 'Terms' or 'Terms of Use') carefully before using the
        Service. By using or otherwise accessing the Service, or clicking to
        accept or agree to these Terms where that option is made available, you
        (1) accept and agree to these Terms and (2) any additional terms, rules
        and conditions of participation issued from time to time. If you do not
        agree to the Terms, then you may not access or use the Content or
        Olivetree Protocol Products.
      </div>
    ),
  },
  {
    title: "2. Modification of Terms of Use",
    text: "These Terms may be discretionarily modified or replaced at any time, unless stated otherwise herein. The most current version of these Terms will be posted on the Interface with the 'Last Revised' date at the top of the Terms changed. Any changes or modifications will be effective immediately upon posting the revisions to the Interface. You shall be responsible for reviewing and becoming familiar with any such modifications. You waive any right you may have to receive specific notice of such changes or modifications. Use of the Interface by you after any modification to the Terms constitutes your acceptance of the Terms as modified. If you do not agree to the Terms in effect when you access or use the Interface, you must stop using the Interface.",
  },
  {
    title: "3. Eligibility",
    text: "You hereby represent and warrant that you are fully able and competent to enter into the terms, conditions, obligations, affirmations, representations and warranties set forth in these Terms and to abide by and comply with these Terms. The Olivetree Protocol Products are global and by accessing the Olivetree Protocol Products, you are representing and warranting that, you are of the legal age of majority in your jurisdiction as is required to access the Olivetree Protocol Products and enter into arrangements. You further represent that you are otherwise legally permitted to use the service in your jurisdiction including owning cryptographic tokens of value, and interacting with the Olivetree Protocol Products. You further represent you are responsible for ensuring compliance with the laws of your jurisdiction and acknowledge that neither the Olivetree Protocol Products NOR ANY RELATED ENTITIES AND AGENTS ('RELATED ENTITIES AND AGENTS includes at least, but is not limited to, (1) the owners of, or contributors to, the Olivetree Protocol Products; and(2) Olivetree Protocol DAO, any founders, employees and/or contractors to Olivetree Protocol DAO, (3) Inclusio Labs, any founders, employees and/or contractors to Inclusio Labs, (4) Inclusio Labs Foundation, any founders, employees and/or contractors to Inclusio Labs Foundation) are liable for your compliance with such laws. Finally, you represent and warrant that you will not use the Olivetree Protocol Products for any illegal activity.",
  },
  {
    title: "4. Representations, Warranties, and Risks",
    text: "",
  },
  {
    title: "4.1. No Representation or Warranty",
    text: "You expressly understand and agree that your use of the Service is at your sole risk. (A) THE OLIVETREE PROTOCOL PRODUCTS and ANY RELATED ENTITIES AND AGENTS (HEREINAFTER THE 'PROTOCOL') EXPRESSLY DISCLAIMS ALL REPRESENTATIONS AND WARRANTIES, EXPRESS, IMPLIED OR STATUTORY; AND (B) WITH RESPECT TO THE OLIVETREE PROTOCOL PRODUCTS, THE PROTOCOL SPECIFICALLY DOES NOT REPRESENT AND WARRANT AND EXPRESSLY DISCLAIMS ANY REPRESENTATION OR WARRANTY, EXPRESS, IMPLIED OR STATUTORY, INCLUDING WITHOUT LIMITATION, ANY REPRESENTATIONS OR WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY, USAGE, SECURITY, SUITABILITY OR FITNESS FOR ANY PARTICULAR PURPOSE, OR AS TO THE WORKMANSHIP OR TECHNICAL CODING THEREOF, OR THE ABSENCE OF ANY DEFECTS THEREIN, WHETHER LATENT OR PATENT. THE PROTOCOL DOES NOT REPRESENT OR WARRANT THAT THE SERVICE AND ANY RELATED INFORMATION ARE ACCURATE, COMPLETE, RELIABLE, CURRENT OR ERROR-FREE.",
  },
  {
    title: "4.2. Disclaimer of Fiduciary Duties",
    text: "TO THE FULLEST EXTENT PERMITTED BY LAW AND NOTWITHSTANDING ANY OTHER PROVISION OF THIS AGREEMENT OR ANY OTHER AGREEMENT CONTEMPLATED HEREIN OR APPLICABLE PROVISIONS OF LAW OR EQUITY OR OTHERWISE, THE PARTIES HERETO HEREBY AGREE TO ELIMINATE ANY AND ALL FIDUCIARY DUTIES THE PROTOCOL (INCLUDING ANY FOUNDERS, CONTRACTORS, OR CONTRIBUTORS) MAY HAVE TO THE USER, ITS AFFILIATES, THE END USERS OF THE OLIVETREE PROTOCOL PRODUCTS, OR THE CONTENT, OR HOLDERS OF THE TOKENS.",
  },
  {
    title: "4.3. Sophistication and Risk of Cryptographic Systems",
    text: (
      <div>
        By utilizing the Olivetree Protocol Products, Tokens, or interacting
        with the Content in any way, you represent that you understand the
        inherent risks associated with cryptographic systems; and warrant that
        you have an understanding of the usage and intricacies of native
        cryptographic tokens, like Ether (ETH) and smart contract based tokens
        such as those that follow the{" "}
        <a
          href="https://olivetree.finance"
          className="underline underline-offset-4"
        >
          Ethereum Token Standard
        </a>
        , and blockchain-based software systems. Neither the Olivetree Protocol
        Products nor any RELATED ENTITIES AND AGENTS owns or controls any of the
        underlying software through which blockchain networks are formed. In
        general, the underlying software for blockchain networks tends to be
        open source such that anyone can use, copy, modify, and distribute it.
        By using the Olivetree Protocol Products, you acknowledge and agree (i)
        the Protocol is not responsible for operation of the underlying software
        and networks that there exists no guarantee of functionality, security,
        or availability of such software and networks; and (ii) that the
        underlying protocols are subject to sudden changes in operating rules
        (known as 'Forks'), and that such Forks may materially affect the
        Protocol. It might be discretionarily decided not to support (or cease
        supporting) the Forked network entirely. You acknowledge and agree that
        the Protocol assumes absolutely no responsibility whatsoever in respect
        of any underlying software protocols, whether Forked or not.
      </div>
    ),
  },
  {
    title: "4.4 Risk of Regulatory Actions in One or More Jurisdictions",
    text: "The Protocol, the Olivetree Protocol Products, the Tokens and ETH could be impacted by one or more regulatory inquiries or regulatory action, which could impede or limit the ability of the Protocol to continue to develop, or which could impede or limit your ability to access or use the Service or Ethereum blockchain, including access to your funds.",
  },
  {
    title: "4.5. Risk of Weaknesses or Exploits in the Field of Cryptography",
    text: "You acknowledge and understand that Cryptography is a progressing field. Advances in code cracking or technical advances such as the development of quantum computers may present risks to cryptocurrencies and the Protocol, the Olivetree Protocol Products or accessing Content, which could result in the theft or loss of your cryptographic tokens or property. By using the Protocol, Interface or accessing Content, you acknowledge these inherent risks.While the Protocol, from time to time at its own discretion, may request security audits of the Olivetree Protocol Products, these audits are for informational purposes only. You understand that they are just the security analysis performed by one entity or individual and are not to be relied upon. They are not meant to guarantee or otherwise represent full security of the system.",
  },
  {
    title: "4.6. Volatility of Cryptocurrency",
    text: "You understand that Ethereum and other blockchain technologies and associated currencies or tokens are highly volatile due to many factors including but not limited to adoption, speculation, technology and security risks. You also acknowledge that the cost of transacting on such technologies is variable and may increase at any time causing impact to any activities taking place on the Ethereum blockchain. You acknowledge these risks and represent that the Protocol or any related entity or person cannot be held liable for such fluctuations or increased costs.",
  },
  {
    title: "4.7. Application Security",
    text: "You acknowledge that the Protocol and the Olivetree Protocol Products and Tokens are subject to flaws and acknowledge that you are solely responsible for evaluating any code provided by the Protocol. This warning and others later provided by Protocol in no way evidence or represent an on-going duty to alert you to all of the potential risks of utilizing the Protocol, Olivetree Protocol Products or accessing Content. You further acknowledge that while the Protocol may engage security audits from time to time, these audits are for informational purposes only. They are not meant to guarantee or otherwise represent full security of the applications.",
  },
  {
    title: "4.8. Website Accuracy",
    text: "Although it is intended to provide accurate and timely information on the Interface and other tools making up the Protocol, the Olivetree Protocol Products (including, without limitation, the Content) or relevant tools may not always be entirely accurate, complete or current and may also include technical inaccuracies or typographical errors. In an effort to continue to provide you with as complete and accurate information as possible, information may be changed or updated from time to time without notice, including without limitation information regarding our policies. Accordingly, you should verify all information before relying on it, and all decisions based on information contained on the Olivetree Protocol Products or relevant tools are your sole responsibility and the Protocol shall have no liability for such decisions. Links to third-party materials (including without limitation websites) and discussions on social media platforms such as Twitter and Discord may be provided as a convenience but are not controlled by any entity. You acknowledge and agree that we are not responsible for any aspect of the information, content, or services contained in any third-party materials or on any third party sites accessible or linked to the Olivetree Protocol Products or available via other relevant tools.",
  },
  {
    title: "4.9. Technical Knowledge",
    text: "Any use or interaction with the Protocol and Olivetree Protocol Products requires a comprehensive understanding of cryptocurrency systems in order to appreciate inherent risks, including those listed above. You represent and warrant that you possess relevant knowledge and skills.",
  },
  {
    title: "5. Indemnity",
    text: "You agree to release and to indemnify, defend and hold harmless Olivetree Protocol and any related entities, as well as the officers, directors, employees, contractors, contributors, shareholders and representatives of any of the foregoing entities, from and against any and all losses, liabilities, expenses, damages, costs (including attorneys' fees, fees or penalties imposed by any regulatory authority and court costs) claims or actions of any kind whatsoever arising or resulting from your use of the Olivetree Protocol Products, your violation of these Terms of Use, your violation of any law, rule, or regulation, or the rights of any third party, and any of your acts or omissions that implicate publicity rights, defamation or invasion of privacy. Olivetree Protocol reserves the right, at its own expense, to assume exclusive defense and control of any matter otherwise subject to indemnification by you and, in such case, you agree to cooperate with Olivetree Protocol in the defense of such matter.",
  },
  {
    title: "6. Limitation on Liability",
    text: "YOU ACKNOWLEDGE AND AGREE THAT YOU ASSUME FULL RESPONSIBILITY FOR YOUR USE OF THE SITE AND SERVICE. YOU ACKNOWLEDGE AND AGREE THAT ANY INFORMATION YOU SEND OR RECEIVE DURING YOUR USE OF THE SITE AND SERVICE MAY NOT BE SECURE AND MAY BE INTERCEPTED OR LATER ACQUIRED BY UNAUTHORIZED PARTIES. YOU ACKNOWLEDGE AND AGREE THAT YOUR USE OF THE SITE AND SERVICE IS AT YOUR OWN RISK. RECOGNIZING SUCH, YOU UNDERSTAND AND AGREE THAT, TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, NEITHER THE PROTOCOL NOR ANY RELATED ENTITIES, SUPPLIERS OR LICENSORS WILL BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, EXEMPLARY OR OTHER DAMAGES OF ANY KIND, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER TANGIBLE OR INTANGIBLE LOSSES OR ANY OTHER DAMAGES BASED ON CONTRACT, TORT, STRICT LIABILITY OR ANY OTHER THEORY (EVEN IF THE PROTOCOL OR RELATED ENTITIES HAD BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), RESULTING FROM THE SITE OR SERVICE; THE USE OR THE INABILITY TO USE THE SITE OR SERVICE; UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA; STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON THE SITE OR SERVICE; ANY ACTIONS WE TAKE OR FAIL TO TAKE AS A RESULT OF COMMUNICATIONS YOU SEND TO US; HUMAN ERRORS; TECHNICAL MALFUNCTIONS; FAILURES, INCLUDING PUBLIC UTILITY OR TELEPHONE OUTAGES; OMISSIONS, INTERRUPTIONS, LATENCY, DELETIONS OR DEFECTS OF ANY DEVICE OR NETWORK, PROVIDERS, OR SOFTWARE (INCLUDING, BUT NOT LIMITED TO, THOSE THAT DO NOT PERMIT PARTICIPATION IN THE SERVICE); ANY INJURY OR DAMAGE TO COMPUTER EQUIPMENT; INABILITY TO FULLY ACCESS THE SITE OR SERVICE OR ANY OTHER WEBSITE; THEFT, TAMPERING, DESTRUCTION, OR UNAUTHORIZED ACCESS TO, IMAGES OR OTHER CONTENT OF ANY KIND; DATA THAT IS PROCESSED LATE OR INCORRECTLY OR IS INCOMPLETE OR LOST; TYPOGRAPHICAL, PRINTING OR OTHER ERRORS, OR ANY COMBINATION THEREOF; OR ANY OTHER MATTER RELATING TO THE SITE OR SERVICE. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, SOME OF THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.YOU FURTHER UNDERSTAND THAT THE PROTOCOL WAS INITIALLY DEVELOPED BY A FOUNDING TEAM AND THEN BY A COMMUNITY OF DAO CONTRIBUTORS AND CONTRACTORS. WHILE THOSE INDIVIDUALS MAY HAVE BEEN INVOLVED IN THE OLIVETREE PROTOCOL PRODUCTS, TO THE EXTENT ANY LIABILITY IS PERMITTED BY LAW, YOU AGREE THAT YOU WILL SEEK ONLY DAMAGES FROM INCLUSIO LABS AND THAT YOU RELEASE ALL INDIVIDUALS IN THEIR PERSONAL CAPACITY.",
  },
  {
    title: "7. Proprietary Rights",
    text: "All title, ownership and intellectual property rights in and to the Interface and the Olivetree Protocol are owned by the Protocol, related entities or their licensors. You acknowledge and agree that the Protocol, Olivetree Protocol Products and Content contain proprietary and confidential information that is protected by applicable intellectual property and other laws. Except as expressly authorized by a relevant entity, you agree not to copy, modify, rent, lease, loan, sell, distribute, perform, display or create derivative works based on the Protocol, Olivetree Protocol Products and Content, in whole or in part.",
  },
  {
    title: "8. Links",
    text: "The Service provides, or third parties may provide, links to other World Wide Web or accessible sites, applications or resources. Because none of the Protocol have control over such sites, applications and resources, you acknowledge and agree that Protocol or any related entity is not responsible for the availability of such external sites, applications or resources, and does not endorse and is not responsible or liable for any content, advertising, products or other materials on or available from such sites or resources. You further acknowledge and agree that Protocol or any related entity shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such site or resource.",
  },
  {
    title: "9. Termination and Suspension",
    text: "The Protocol may terminate or suspend access to the Interface immediately, without prior notice or liability, if you breach any of the terms or conditions of the Terms. Upon termination of your access, your right to use the Interface will immediately cease. The following provisions of the Terms survive any termination of these Terms: INDEMNITY; WARRANTY DISCLAIMERS; LIMITATION ON LIABILITY; OUR PROPRIETARY RIGHTS; LINKS; TERMINATION; NO THIRD-PARTY BENEFICIARIES; BINDING ARBITRATION AND CLASS ACTION WAIVER; GENERAL INFORMATION.",
  },
  {
    title: "10. No Third-Party Beneficiaries",
    text: "You agree that, except as otherwise expressly provided in these Terms, there shall be no third party beneficiaries to the Terms.",
  },
  {
    title:
      "11. Notice and Procedure For Making Claims of Copyright Infringement",
    text: (
      <div>
        If you believe that your copyright or the copyright of a person on whose
        behalf you are authorized to act has been infringed, please provide a
        written Notice (hello@inclusiolabs.com) containing the following
        information:
        <ol className="ml-5 my-2">
          <li className="my-0.5">
            • An electronic or physical signature of the person authorized to
            act on behalf of the owner of the copyright or other intellectual
            property interest
          </li>
          <li className="my-0.5">
            • A description of the copyrighted work or other intellectual
            property that you claim has been infringed
          </li>
          <li className="my-0.5">
            • A description of where the material that you claim is infringing
            is located on the Service
          </li>
          <li className="my-0.5">
            • Your address, telephone number, and email address
          </li>
          <li className="my-0.5">
            • A statement by you that you have a good faith belief that the
            disputed use is not authorized by the copyright owner, its agent, or
            the law
          </li>
          <li className="my-0.5">
            • A statement by you, made under penalty of perjury, that the above
            information in your Notice is accurate and that you are the
            copyright or intellectual property owner or authorized to act on the
            copyright or intellectual property owner's behalf.
          </li>
        </ol>
      </div>
    ),
  },
  {
    title: "12. Arbitration and Class Action Waiver",
    text: "",
  },
  {
    title: "12.1. Initial Dispute Resolution",
    text: "The parties shall use their best efforts to engage directly to settle any dispute, claim, question, or disagreement and engage in good faith negotiations which shall be a condition to either party initiating an arbitration.",
  },
  {
    title: "12.2. Binding Arbitration",
    text: (
      <div>
        If we cannot resolve the dispute through good-faith negotiations, you
        and we agree that any dispute arising under this Agreement shall be
        finally settled in binding arbitration, on an individual basis, in
        accordance with the American Arbitration Association's rules for
        arbitration of consumer-related disputes (accessible at{" "}
        <a
          href="https://www.adr.org/sites/default/files/Consumer%20Rules.pdf"
          className="underline underline-offset-4"
        >
          ConsumerRules.pdf
        </a>{" "}
        ) and you and the Protocol hereby expressly waive trial by jury and
        right to participate in a class action lawsuit or class-wide
        arbitration. The arbitration will be conducted by a single, neutral
        arbitrator and shall take place in the county or parish in which you
        reside, or another mutually agreeable location, in the English language.
        The arbitrator may award any relief that a court of competent
        jurisdiction could award, including attorneys' fees when authorized by
        law, and the arbitral decision may be enforced in any court. At your
        request, hearings may be conducted in person or by telephone and the
        arbitrator may provide for submitting and determining motions on briefs,
        without oral hearings. The prevailing party in any action or proceeding
        to enforce this agreement shall be entitled to costs and attorneys'
        fees. If the arbitrator(s) or arbitration administrator would impose
        filing fees or other administrative costs on you, we will reimburse you,
        upon request, to the extent such fees or costs would exceed those that
        you would otherwise have to pay if you were proceeding instead in a
        court. We will also pay additional fees or costs if required to do so by
        the arbitration administrator's rules or applicable law. Apart from the
        foregoing, each Party will be responsible for any other fees or costs,
        such as attorney fees that the Party may incur. If a court decides that
        any provision of this section 12.2 is invalid or unenforceable, that
        provision shall be severed and the other parts of this section 12.2
        shall still apply. In any case, the remainder of this Agreement will
        continue to apply.
      </div>
    ),
  },
  {
    title: "13. Severability Clause",
    text: "In case any provision in this Terms and Conditions shall be invalid, illegal or unenforceable, the validity, legality and enforceability of the remaining provisions shall not in any way be affected or impaired thereby and such provision shall be ineffective only to the extent of such invalidity, illegality or unenforceability.",
  },
];

export default function Conditions() {
  return (
    <div className="px-[20px] sm:px-[30px] md:px-[50px] lg:px-[100px] xl:px-[152px]">
      <Navbar />
      <ConditionsPrivacyInfo
        title="Terms and Conditions"
        date="Last Updated on May 15, 2023"
        data={conditionsData}
      />
      <Footer />
    </div>
  );
}
