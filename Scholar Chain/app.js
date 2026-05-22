import { ethers } from "https://cdn.jsdelivr.net/npm/ethers@6.13.5/+esm";

const CONTRACT_ADDRESS = "0xb7f65E68DefC1caB71b9cAA97CF7D8335751D205";

const ABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "admin",
        "type": "address"
      }
    ],
    "name": "addAdmin",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "applicationId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "enum ScholarChain.ApplicationStatus",
        "name": "status",
        "type": "uint8"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "admin",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "note",
        "type": "string"
      }
    ],
    "name": "ApplicationReviewed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "applicationId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "scholarshipId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "student",
        "type": "address"
      }
    ],
    "name": "ApplicationSubmitted",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "scholarshipId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "note",
        "type": "string"
      }
    ],
    "name": "applyForScholarship",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "applicationId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "scholarshipId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "student",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "AwardPaid",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "title",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "awardAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "maxWinners",
        "type": "uint256"
      },
      {
        "internalType": "uint16",
        "name": "minGpaX100",
        "type": "uint16"
      },
      {
        "internalType": "uint256",
        "name": "maxAnnualIncome",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "minSemester",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "createScholarship",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "scholarshipId",
        "type": "uint256"
      }
    ],
    "name": "fundScholarship",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "fullName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "university",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "program",
        "type": "string"
      },
      {
        "internalType": "uint8",
        "name": "semester",
        "type": "uint8"
      },
      {
        "internalType": "uint16",
        "name": "gpaX100",
        "type": "uint16"
      },
      {
        "internalType": "uint256",
        "name": "annualIncome",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "documentCID",
        "type": "string"
      }
    ],
    "name": "registerOrUpdateStudent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "admin",
        "type": "address"
      }
    ],
    "name": "removeAdmin",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "applicationId",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      },
      {
        "internalType": "string",
        "name": "decisionNote",
        "type": "string"
      }
    ],
    "name": "reviewApplication",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "studentAddress",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      },
      {
        "internalType": "string",
        "name": "note",
        "type": "string"
      }
    ],
    "name": "reviewStudent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "scholarshipId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "title",
        "type": "string"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sponsor",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "totalFund",
        "type": "uint256"
      }
    ],
    "name": "ScholarshipCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "scholarshipId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "funder",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "ScholarshipFunded",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "scholarshipId",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "active",
        "type": "bool"
      }
    ],
    "name": "setScholarshipActive",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "student",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "fullName",
        "type": "string"
      }
    ],
    "name": "StudentRegistered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "student",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "enum ScholarChain.StudentStatus",
        "name": "status",
        "type": "uint8"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "admin",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "note",
        "type": "string"
      }
    ],
    "name": "StudentReviewed",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "applicationByStudentAndScholarship",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "applicationCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "applications",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "scholarshipId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "student",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "note",
        "type": "string"
      },
      {
        "internalType": "enum ScholarChain.ApplicationStatus",
        "name": "status",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "appliedAt",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "paidAt",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "reviewedBy",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "decisionNote",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "studentAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "scholarshipId",
        "type": "uint256"
      }
    ],
    "name": "checkEligibility",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllApplications",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "scholarshipId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "student",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "note",
            "type": "string"
          },
          {
            "internalType": "enum ScholarChain.ApplicationStatus",
            "name": "status",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "appliedAt",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "paidAt",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "reviewedBy",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "decisionNote",
            "type": "string"
          }
        ],
        "internalType": "struct ScholarChain.Application[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllScholarships",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "title",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "sponsor",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "totalFund",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "remainingFund",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "awardAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "maxWinners",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "winners",
            "type": "uint256"
          },
          {
            "internalType": "uint16",
            "name": "minGpaX100",
            "type": "uint16"
          },
          {
            "internalType": "uint256",
            "name": "maxAnnualIncome",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "minSemester",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "active",
            "type": "bool"
          }
        ],
        "internalType": "struct ScholarChain.Scholarship[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllStudents",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "wallet",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "fullName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "university",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "program",
            "type": "string"
          },
          {
            "internalType": "uint8",
            "name": "semester",
            "type": "uint8"
          },
          {
            "internalType": "uint16",
            "name": "gpaX100",
            "type": "uint16"
          },
          {
            "internalType": "uint256",
            "name": "annualIncome",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "documentCID",
            "type": "string"
          },
          {
            "internalType": "enum ScholarChain.StudentStatus",
            "name": "status",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "exists",
            "type": "bool"
          }
        ],
        "internalType": "struct ScholarChain.Student[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getMyApplications",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "scholarshipId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "student",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "note",
            "type": "string"
          },
          {
            "internalType": "enum ScholarChain.ApplicationStatus",
            "name": "status",
            "type": "uint8"
          },
          {
            "internalType": "uint256",
            "name": "appliedAt",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "paidAt",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "reviewedBy",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "decisionNote",
            "type": "string"
          }
        ],
        "internalType": "struct ScholarChain.Application[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "isAdmin",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "scholarshipCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "scholarships",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "title",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "sponsor",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "totalFund",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "remainingFund",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "awardAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "maxWinners",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "winners",
        "type": "uint256"
      },
      {
        "internalType": "uint16",
        "name": "minGpaX100",
        "type": "uint16"
      },
      {
        "internalType": "uint256",
        "name": "maxAnnualIncome",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "minSemester",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "active",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "students",
    "outputs": [
      {
        "internalType": "address",
        "name": "wallet",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "fullName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "university",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "program",
        "type": "string"
      },
      {
        "internalType": "uint8",
        "name": "semester",
        "type": "uint8"
      },
      {
        "internalType": "uint16",
        "name": "gpaX100",
        "type": "uint16"
      },
      {
        "internalType": "uint256",
        "name": "annualIncome",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "documentCID",
        "type": "string"
      },
      {
        "internalType": "enum ScholarChain.StudentStatus",
        "name": "status",
        "type": "uint8"
      },
      {
        "internalType": "bool",
        "name": "exists",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

const StudentStatus = ["None", "Pending", "Verified", "Rejected"];
const ApplicationStatus = ["None", "Applied", "Approved", "Rejected", "Paid"];

let provider;
let signer;
let contract;
let currentAccount = "";
let allScholarships = [];
let allStudents = [];
let allApplications = [];

const $ = (selector) => document.querySelector(selector);

const els = {
  connectWallet: $("#connectWallet"),
  walletAddress: $("#walletAddress"),
  networkName: $("#networkName"),
  contractLabel: $("#contractLabel"),
  roleLabel: $("#roleLabel"),
  notice: $("#notice"),
  statScholarships: $("#statScholarships"),
  statStudents: $("#statStudents"),
  statApplications: $("#statApplications"),
  scholarshipList: $("#scholarshipList"),
  studentProfile: $("#studentProfile"),
  myApplications: $("#myApplications"),
  studentReviewList: $("#studentReviewList"),
  applicationReviewList: $("#applicationReviewList"),
  paymentRows: $("#paymentRows")
};

els.contractLabel.textContent = isConfigured() ? shortAddress(CONTRACT_ADDRESS) : "Paste address in app.js";
els.connectWallet.addEventListener("click", connectWallet);
$("#refreshScholarships").addEventListener("click", refreshApp);
$("#refreshAdmin").addEventListener("click", refreshApp);
$("#refreshActivity").addEventListener("click", loadPayments);
$("#studentForm").addEventListener("submit", saveStudentProfile);
$("#scholarshipForm").addEventListener("submit", createScholarship);
document.querySelectorAll(".nav-route").forEach((button) => {
  button.addEventListener("click", () => showPage(button.dataset.page));
});

showPage("home");

function isConfigured() {
  return ethers.isAddress(CONTRACT_ADDRESS);
}

function showPage(pageName) {
  document.querySelectorAll(".page").forEach((page) => page.classList.remove("active"));
  document.querySelector(`#page-${pageName}`)?.classList.add("active");

  document.querySelectorAll(".nav-tabs .nav-route").forEach((button) => {
    button.classList.toggle("active", button.dataset.page === pageName);
  });
}

async function connectWallet() {
  try {
    if (!window.ethereum) {
      showNotice("Please install MetaMask or another browser wallet.", true);
      return;
    }

    if (!isConfigured()) {
      showNotice("Deploy ScholarChainSimple.sol, then paste the deployed address in app.js.", true);
      return;
    }

    provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = await provider.getSigner();
    currentAccount = await signer.getAddress();
    contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

    const network = await provider.getNetwork();
    els.walletAddress.textContent = shortAddress(currentAccount);
    els.networkName.textContent = `Connected to ${network.name || "custom network"} (${network.chainId})`;

    showNotice("Wallet connected. Dashboard loaded.");
    await refreshApp();
  } catch (error) {
    handleError("Wallet connection failed", error);
  }
}

async function refreshApp() {
  if (!contract) return;

  const [owner, admin, student, scholarships, students, applications, myApplications] = await Promise.all([
    contract.owner(),
    contract.isAdmin(currentAccount),
    contract.students(currentAccount),
    contract.getAllScholarships(),
    contract.getAllStudents(),
    contract.getAllApplications(),
    contract.getMyApplications()
  ]);

  allScholarships = scholarships;
  allStudents = students;
  allApplications = applications;

  updateRole(owner, admin, student);
  renderStats(scholarships, students, applications);
  renderStudentProfile(student, myApplications);
  renderScholarships(scholarships, student);
  renderAdmin(students, applications, scholarships, admin);
  await loadPayments();
}

function updateRole(owner, admin, student) {
  const roles = [];
  if (owner.toLowerCase() === currentAccount.toLowerCase()) roles.push("Owner");
  if (admin) roles.push("Admin");
  if (student.exists) roles.push("Student");
  els.roleLabel.textContent = roles.length ? roles.join(" + ") : "Connected user";
}

function renderStats(scholarships, students, applications) {
  els.statScholarships.textContent = scholarships.length;
  els.statStudents.textContent = students.length;
  els.statApplications.textContent = applications.length;
}

function renderStudentProfile(student, applications) {
  if (!student.exists) {
    els.studentProfile.className = "empty-state";
    els.studentProfile.textContent = "No student profile yet. Fill the form to register.";
  } else {
    els.studentProfile.className = "profile-card";
    els.studentProfile.innerHTML = `
      <span class="${statusClass(Number(student.status))}">${StudentStatus[Number(student.status)]}</span>
      <h3>${escapeHtml(student.fullName)}</h3>
      <div class="mini-meta">
        <div><span>University</span><strong>${escapeHtml(student.university)}</strong></div>
        <div><span>Program</span><strong>${escapeHtml(student.program)}</strong></div>
        <div><span>Semester</span><strong>${student.semester}</strong></div>
        <div><span>GPA</span><strong>${formatGpa(student.gpaX100)}</strong></div>
      </div>
    `;
  }

  if (!applications.length) {
    els.myApplications.innerHTML = "";
    return;
  }

  els.myApplications.innerHTML = `
    <h3>My applications</h3>
    ${applications.map((application) => `
      <div class="mini-item">
        <span>Application #${application.id} for scholarship #${application.scholarshipId}</span>
        <strong>${ApplicationStatus[Number(application.status)]}</strong>
      </div>
    `).join("")}
  `;
}

function renderScholarships(scholarships, student) {
  if (!scholarships.length) {
    els.scholarshipList.innerHTML = `<div class="empty-state">No scholarships are published yet.</div>`;
    return;
  }

  els.scholarshipList.innerHTML = scholarships.map((scholarship) => {
    const closed = !scholarship.active || Number(scholarship.deadline) * 1000 < Date.now();
    const seatsLeft = Number(scholarship.maxWinners - scholarship.winners);
    const canApply = student.exists && Number(student.status) === 2 && !closed && seatsLeft > 0;

    return `
      <article class="scholarship-card">
        <header>
          <span class="${closed ? "badge warning" : "badge"}">${closed ? "Closed" : "Open"}</span>
          <h3>${escapeHtml(scholarship.title)}</h3>
          <p>${escapeHtml(scholarship.description)}</p>
        </header>
        <div class="card-meta">
          <div><span>Award</span><strong>${formatNative(scholarship.awardAmount)}</strong></div>
          <div><span>Seats left</span><strong>${Math.max(seatsLeft, 0)}</strong></div>
          <div><span>Minimum GPA</span><strong>${formatGpa(scholarship.minGpaX100)}</strong></div>
          <div><span>Deadline</span><strong>${formatDate(scholarship.deadline)}</strong></div>
        </div>
        <button class="primary" data-apply="${scholarship.id}" ${canApply ? "" : "disabled"}>${canApply ? "Apply Now" : "Not available"}</button>
      </article>
    `;
  }).join("");

  document.querySelectorAll("[data-apply]").forEach((button) => {
    button.addEventListener("click", () => applyForScholarship(button.dataset.apply));
  });
}

function renderAdmin(students, applications, scholarships, admin) {
  if (!admin) {
    els.studentReviewList.innerHTML = `<div class="empty-state">Only admins can verify students.</div>`;
    els.applicationReviewList.innerHTML = `<div class="empty-state">Only admins can approve or reject applications.</div>`;
    return;
  }

  const pendingStudents = students.filter((student) => Number(student.status) === 1);
  els.studentReviewList.innerHTML = pendingStudents.length
    ? pendingStudents.map((student) => `
      <div class="review-item">
        <div>
          <h3>${escapeHtml(student.fullName)}</h3>
          <p>${escapeHtml(student.university)} - ${escapeHtml(student.program)}</p>
        </div>
        <div class="mini-meta">
          <div><span>GPA</span><strong>${formatGpa(student.gpaX100)}</strong></div>
          <div><span>Income</span><strong>${formatNumber(student.annualIncome)}</strong></div>
        </div>
        <div class="review-actions">
          <button class="primary" data-student-approve="${student.wallet}">Verify</button>
          <button class="danger" data-student-reject="${student.wallet}">Reject</button>
        </div>
      </div>
    `).join("")
    : `<div class="empty-state">No students waiting for verification.</div>`;

  const applied = applications.filter((application) => Number(application.status) === 1);
  els.applicationReviewList.innerHTML = applied.length
    ? applied.map((application) => {
      const scholarship = scholarships.find((item) => item.id === application.scholarshipId);
      const student = students.find((item) => item.wallet.toLowerCase() === application.student.toLowerCase());
      return `
        <div class="review-item">
          <div>
            <h3>${student ? escapeHtml(student.fullName) : shortAddress(application.student)}</h3>
            <p>${scholarship ? escapeHtml(scholarship.title) : `Scholarship #${application.scholarshipId}`}</p>
          </div>
          <p>${escapeHtml(application.note || "No student note provided.")}</p>
          <div class="review-actions">
            <button class="primary" data-app-approve="${application.id}">Approve and Pay</button>
            <button class="danger" data-app-reject="${application.id}">Reject</button>
          </div>
        </div>
      `;
    }).join("")
    : `<div class="empty-state">No applications waiting for review.</div>`;

  document.querySelectorAll("[data-student-approve]").forEach((button) => {
    button.addEventListener("click", () => reviewStudent(button.dataset.studentApprove, true));
  });
  document.querySelectorAll("[data-student-reject]").forEach((button) => {
    button.addEventListener("click", () => reviewStudent(button.dataset.studentReject, false));
  });
  document.querySelectorAll("[data-app-approve]").forEach((button) => {
    button.addEventListener("click", () => reviewApplication(button.dataset.appApprove, true));
  });
  document.querySelectorAll("[data-app-reject]").forEach((button) => {
    button.addEventListener("click", () => reviewApplication(button.dataset.appReject, false));
  });
}

async function saveStudentProfile(event) {
  event.preventDefault();
  await sendTransaction("Saving student profile", async () => {
    const data = new FormData(event.currentTarget);
    return contract.registerOrUpdateStudent(
      data.get("fullName").trim(),
      data.get("university").trim(),
      data.get("program").trim(),
      Number(data.get("semester")),
      gpaToX100(data.get("gpa")),
      BigInt(data.get("income")),
      data.get("documentCID").trim()
    );
  });
}

async function createScholarship(event) {
  event.preventDefault();
  await sendTransaction("Creating scholarship", async () => {
    const data = new FormData(event.currentTarget);
    const awardAmount = ethers.parseEther(data.get("awardAmount"));
    const maxWinners = BigInt(data.get("maxWinners"));
    const totalFunding = awardAmount * maxWinners;

    return contract.createScholarship(
      data.get("title").trim(),
      data.get("description").trim(),
      awardAmount,
      maxWinners,
      gpaToX100(data.get("minGpa")),
      BigInt(data.get("maxIncome")),
      Number(data.get("minSemester")),
      BigInt(toUnix(data.get("deadline"))),
      { value: totalFunding }
    );
  });
}

async function applyForScholarship(scholarshipId) {
  const note = window.prompt("Add a short note for the admin, or leave it blank.");
  if (note === null) return;

  await sendTransaction("Submitting application", async () => {
    return contract.applyForScholarship(BigInt(scholarshipId), note.trim());
  });
}

async function reviewStudent(studentAddress, approved) {
  await sendTransaction(approved ? "Verifying student" : "Rejecting student", async () => {
    return contract.reviewStudent(studentAddress, approved, approved ? "Verified" : "Rejected by admin");
  });
}

async function reviewApplication(applicationId, approved) {
  await sendTransaction(approved ? "Approving and paying award" : "Rejecting application", async () => {
    return contract.reviewApplication(BigInt(applicationId), approved, approved ? "Approved for award" : "Application rejected");
  });
}

async function sendTransaction(label, makeTransaction) {
  try {
    requireContract();
    showNotice(`${label}. Please confirm in your wallet.`);
    const tx = await makeTransaction();
    showNotice("Transaction sent. Waiting for confirmation...");
    await tx.wait();
    showNotice(`${label} completed.`);
    await refreshApp();
  } catch (error) {
    handleError(label, error);
  }
}

async function loadPayments() {
  if (!contract) return;

  const events = await contract.queryFilter(contract.filters.AwardPaid(), 0, "latest");
  if (!events.length) {
    els.paymentRows.innerHTML = `<tr><td colspan="4">No award payments yet.</td></tr>`;
    return;
  }

  els.paymentRows.innerHTML = events.slice().reverse().map((event) => `
    <tr>
      <td>${shortAddress(event.args.student)}</td>
      <td>#${event.args.scholarshipId}</td>
      <td>${formatNative(event.args.amount)}</td>
      <td>${shortAddress(event.transactionHash)}</td>
    </tr>
  `).join("");
}

function requireContract() {
  if (!contract) throw new Error("Connect your wallet first.");
}

function showNotice(message, isError = false) {
  els.notice.hidden = false;
  els.notice.textContent = message;
  els.notice.classList.toggle("error", isError);
}

function handleError(label, error) {
  const message = error?.shortMessage || error?.reason || error?.message || "Something went wrong.";
  showNotice(`${label}: ${message}`, true);
}

function shortAddress(value) {
  if (!value || value.length < 12) return value || "-";
  return `${value.slice(0, 6)}...${value.slice(-4)}`;
}

function gpaToX100(value) {
  const gpa = Number(value);
  if (!Number.isFinite(gpa) || gpa < 0 || gpa > 4) throw new Error("GPA must be between 0.00 and 4.00.");
  return Math.round(gpa * 100);
}

function formatGpa(value) {
  return (Number(value) / 100).toFixed(2);
}

function formatNative(value) {
  return `${Number(ethers.formatEther(value)).toLocaleString(undefined, { maximumFractionDigits: 4 })} native coin`;
}

function formatNumber(value) {
  return Number(value).toLocaleString();
}

function formatDate(value) {
  return new Date(Number(value) * 1000).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function toUnix(value) {
  const ms = new Date(value).getTime();
  if (!Number.isFinite(ms)) throw new Error("Choose a valid deadline.");
  return Math.floor(ms / 1000);
}

function statusClass(status) {
  if (status === 2) return "badge";
  if (status === 3) return "badge error";
  return "badge warning";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
