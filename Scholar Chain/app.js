import { ethers } from "https://cdn.jsdelivr.net/npm/ethers@6.13.5/+esm";

const ABI = [
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
        "name": "appId",
        "type": "uint256"
      },
      {
        "indexed": false,
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
    "name": "ApplicationApproved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "appId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "student",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "scholarshipId",
        "type": "uint256"
      }
    ],
    "name": "ApplicationSubmitted",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_scholarshipId",
        "type": "uint256"
      }
    ],
    "name": "applyForScholarship",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_applicationId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_notes",
        "type": "string"
      }
    ],
    "name": "approveApplication",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_description",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_maxRecipients",
        "type": "uint256"
      },
      {
        "internalType": "uint16",
        "name": "_minCgpaX100",
        "type": "uint16"
      },
      {
        "internalType": "uint256",
        "name": "_maxIncomeX100",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "_requiredSemester",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "_deadline",
        "type": "uint256"
      }
    ],
    "name": "createScholarship",
    "outputs": [],
    "stateMutability": "payable",
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
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "scholarshipId",
        "type": "uint256"
      }
    ],
    "name": "FundsReleased",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_fullName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_nationalId",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_university",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_program",
        "type": "string"
      },
      {
        "internalType": "uint8",
        "name": "_semesterYear",
        "type": "uint8"
      },
      {
        "internalType": "uint16",
        "name": "_cgpaX100",
        "type": "uint16"
      },
      {
        "internalType": "uint256",
        "name": "_annualIncomeX100",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_ipfsHash",
        "type": "string"
      }
    ],
    "name": "registerStudent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_applicationId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "reason",
        "type": "string"
      }
    ],
    "name": "rejectApplication",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_student",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "reason",
        "type": "string"
      }
    ],
    "name": "rejectStudent",
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
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "provider",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
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
        "internalType": "address",
        "name": "student",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
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
        "internalType": "address",
        "name": "admin",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "reason",
        "type": "string"
      }
    ],
    "name": "StudentRejected",
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
        "internalType": "address",
        "name": "admin",
        "type": "address"
      }
    ],
    "name": "StudentVerified",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_student",
        "type": "address"
      }
    ],
    "name": "verifyStudent",
    "outputs": [],
    "stateMutability": "nonpayable",
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
        "internalType": "address",
        "name": "student",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "scholarshipId",
        "type": "uint256"
      },
      {
        "internalType": "enum ScholarChain.ApplicationStatus",
        "name": "status",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "submittedAt",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "approvedAt",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "reviewNotes",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "reviewedBy",
        "type": "address"
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
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "existingApplication",
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
    "name": "getAllStudents",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
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
    "name": "platformFeeBps",
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
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "scholarshipApplications",
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
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "provider",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "totalFund",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "disbursedAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "maxRecipients",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "currentRecipients",
        "type": "uint256"
      },
      {
        "internalType": "uint16",
        "name": "minCgpaX100",
        "type": "uint16"
      },
      {
        "internalType": "uint256",
        "name": "maxAnnualIncomeX100",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "requiredSemester",
        "type": "uint8"
      },
      {
        "internalType": "enum ScholarChain.ScholarshipStatus",
        "name": "status",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "createdAt",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountPerRecipient",
        "type": "uint256"
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
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "studentApplications",
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
        "name": "nationalId",
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
        "name": "semesterYear",
        "type": "uint8"
      },
      {
        "internalType": "uint16",
        "name": "cgpaX100",
        "type": "uint16"
      },
      {
        "internalType": "uint256",
        "name": "annualIncomeX100",
        "type": "uint256"
      },
      {
        "internalType": "enum ScholarChain.StudentStatus",
        "name": "status",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "registrationTime",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "ipfsDocumentHash",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "isRegistered",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

let provider;
let signer;
let contract;

const els = {
  connectWallet: document.querySelector("#connectWallet"),
  walletAddress: document.querySelector("#walletAddress"),
  contractAddress: document.querySelector("#contractAddress"),
  saveContract: document.querySelector("#saveContract"),
  networkName: document.querySelector("#networkName"),
  statusBox: document.querySelector("#statusBox"),
  output: document.querySelector("#output")
};

const CONTRACT_ADDRESS = "0x756856C4b76f12E8349C3d003BF8a612d0dA04a8";
els.contractAddress.value = CONTRACT_ADDRESS;

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab, .tab-panel").forEach((el) => el.classList.remove("active"));
    tab.classList.add("active");
    document.querySelector(`#${tab.dataset.tab}`).classList.add("active");
  });
});

els.connectWallet.addEventListener("click", connectWallet);
els.saveContract.addEventListener("click", () => {
  connectContract();
  showStatus("Contract loaded.");
  loadRoleDashboard();
});
document.querySelector("#clearOutput").addEventListener("click", () => {
  els.output.textContent = "Ready.";
});

bindForms();

async function connectWallet() {
  if (!window.ethereum) {
    showStatus("MetaMask or another injected wallet is required.", true);
    return;
  }

  provider = new ethers.BrowserProvider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  signer = await provider.getSigner();
  const network = await provider.getNetwork();
  els.walletAddress.textContent = await signer.getAddress();
  els.networkName.textContent = `Network: ${network.name || "custom"} (${network.chainId})`;
  connectContract();
  showStatus("Wallet connected.");
  loadRoleDashboard();
}

function connectContract() {
  if (!signer || !ethers.isAddress(CONTRACT_ADDRESS)) return;
  contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
}

function requireContract() {
  if (!contract) throw new Error("Connect wallet and set the contract address first.");
  return contract;
}

function getFormValues(form) {
  return Object.fromEntries(new FormData(form).entries());
}

function toInt(value, label) {
  if (value === "" || value === undefined || value === null) throw new Error(`${label} is required.`);
  return BigInt(value);
}

function toNumber(value, label) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) throw new Error(`${label} must be a number.`);
  return parsed;
}

function deadlineToUnix(value) {
  const ms = new Date(value).getTime();
  if (!Number.isFinite(ms)) throw new Error("Deadline must be a valid date.");
  return Math.floor(ms / 1000);
}

async function sendTransaction(label, fn) {
  try {
    showStatus(`${label}: waiting for wallet confirmation...`);
    const tx = await fn(requireContract());
    showStatus(`${label}: submitted ${tx.hash}. Waiting for confirmation...`);
    const receipt = await tx.wait();
    writeOutput({ label, transactionHash: receipt.hash, blockNumber: receipt.blockNumber, status: receipt.status === 1 ? "success" : "failed" });
    showStatus(`${label}: confirmed.`);
  } catch (error) {
    handleError(label, error);
  }
}

async function readContract(label, fn) {
  try {
    const result = await fn(requireContract());
    writeOutput(formatResult(result));
    showStatus(`${label}: loaded.`);
  } catch (error) {
    handleError(label, error);
  }
}

function handleError(label, error) {
  const reason = error?.shortMessage || error?.reason || error?.message || "Unknown error";
  showStatus(`${label}: ${reason}`, true);
  writeOutput({ label, error: reason, raw: error?.info || null });
}

function showStatus(message, isError = false) {
  els.statusBox.hidden = false;
  els.statusBox.textContent = message;
  els.statusBox.style.color = isError ? "var(--red)" : "var(--green-dark)";
}

function writeOutput(value) {
  els.output.textContent = typeof value === "string" ? value : JSON.stringify(value, bigIntReplacer, 2);
}

function bigIntReplacer(_key, value) {
  return typeof value === "bigint" ? value.toString() : value;
}

function formatResult(value) {
  if (Array.isArray(value)) return value.map(formatResult);
  if (value && typeof value === "object") {
    const obj = {};
    Object.entries(value).forEach(([key, item]) => {
      if (!Number.isNaN(Number(key))) return;
      obj[key] = formatResult(item);
    });
    return obj;
  }
  return value;
}

const STUDENT_STATUS = ["Unregistered", "Pending", "Verified", "Rejected", "Blacklisted"];
const SCHOLARSHIP_STATUS = ["Active", "Paused", "Completed", "Cancelled"];
const APPLICATION_STATUS = ["Submitted", "Under review", "Approved", "Rejected", "Disbursing", "Completed"];

async function loadRoleDashboard() {
  if (!contract || !signer) return;

  try {
    const address = await signer.getAddress();
    const [owner, admin, student] = await Promise.all([
      contract.owner(),
      contract.isAdmin(address),
      contract.students(address)
    ]);

    const roles = [];
    if (owner.toLowerCase() === address.toLowerCase()) roles.push("Owner");
    if (admin) roles.push("Admin");
    if (student.isRegistered) roles.push("Student");

    document.querySelector("#roleTitle").textContent = roles.length ? roles.join(" + ") : "Connected user";
    document.querySelector("#roleOverview").innerHTML = `
      <div><dt>Access</dt><dd>${roles.length ? roles.join(", ") : "Wallet only"}</dd></div>
      <div><dt>Student</dt><dd>${student.isRegistered ? STUDENT_STATUS[Number(student.status)] : "Not registered"}</dd></div>
      <div><dt>Owner</dt><dd>${shortAddress(owner)}</dd></div>
    `;
  } catch (error) {
    handleError("Role dashboard", error);
  }
}

function shortAddress(address) {
  if (!address || address.length < 12) return address || "-";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

function formatStudent(student) {
  return {
    wallet: student.wallet,
    fullName: student.fullName,
    university: student.university,
    program: student.program,
    semesterYear: student.semesterYear,
    cgpa: `${Number(student.cgpaX100) / 100}`,
    annualIncomeX100: student.annualIncomeX100,
    status: STUDENT_STATUS[Number(student.status)] || String(student.status),
    ipfsDocumentHash: student.ipfsDocumentHash,
    isRegistered: student.isRegistered
  };
}

function formatScholarship(scholarship) {
  return {
    id: scholarship.id,
    name: scholarship.name,
    description: scholarship.description,
    provider: scholarship.provider,
    totalFund: ethers.formatEther(scholarship.totalFund),
    disbursedAmount: ethers.formatEther(scholarship.disbursedAmount),
    maxRecipients: scholarship.maxRecipients,
    currentRecipients: scholarship.currentRecipients,
    minCgpa: `${Number(scholarship.minCgpaX100) / 100}`,
    maxAnnualIncomeX100: scholarship.maxAnnualIncomeX100,
    requiredSemester: scholarship.requiredSemester,
    status: SCHOLARSHIP_STATUS[Number(scholarship.status)] || String(scholarship.status),
    deadline: new Date(Number(scholarship.deadline) * 1000).toLocaleString(),
    amountPerRecipient: ethers.formatEther(scholarship.amountPerRecipient)
  };
}

function formatApplication(application) {
  return {
    id: application.id,
    student: application.student,
    scholarshipId: application.scholarshipId,
    status: APPLICATION_STATUS[Number(application.status)] || String(application.status),
    submittedAt: new Date(Number(application.submittedAt) * 1000).toLocaleString(),
    approvedAt: Number(application.approvedAt) ? new Date(Number(application.approvedAt) * 1000).toLocaleString() : "Not approved",
    reviewNotes: application.reviewNotes,
    reviewedBy: application.reviewedBy
  };
}

async function checkEligibilityBasic(studentAddress, scholarshipId) {
  const [student, scholarship, existingApp] = await Promise.all([
    contract.students(studentAddress),
    contract.scholarships(scholarshipId),
    contract.existingApplication(studentAddress, scholarshipId)
  ]);

  if (!student.isRegistered) return { eligible: false, reason: "Student is not registered." };
  if (Number(student.status) !== 2) return { eligible: false, reason: `Student status is ${STUDENT_STATUS[Number(student.status)]}.` };
  if (Number(scholarship.status) !== 0) return { eligible: false, reason: `Scholarship status is ${SCHOLARSHIP_STATUS[Number(scholarship.status)]}.` };
  if (Date.now() / 1000 > Number(scholarship.deadline)) return { eligible: false, reason: "Application deadline has passed." };
  if (existingApp > 0n) return { eligible: false, reason: "Student already applied for this scholarship." };
  if (student.cgpaX100 < scholarship.minCgpaX100) return { eligible: false, reason: "CGPA is below the scholarship minimum." };
  if (scholarship.maxAnnualIncomeX100 > 0n && student.annualIncomeX100 > scholarship.maxAnnualIncomeX100) return { eligible: false, reason: "Income is above the scholarship limit." };
  if (scholarship.requiredSemester > 0 && student.semesterYear < scholarship.requiredSemester) return { eligible: false, reason: "Semester requirement is not met." };

  return {
    eligible: true,
    reason: "Student meets the visible scholarship requirements.",
    student: formatStudent(student),
    scholarship: formatScholarship(scholarship)
  };
}

async function loadPaymentHistory(studentAddress) {
  const events = await contract.queryFilter(contract.filters.FundsReleased(), 0, "latest");
  const normalized = events
    .map((event) => ({
      blockNumber: event.blockNumber,
      student: event.args.student,
      amount: ethers.formatEther(event.args.amount),
      scholarshipId: event.args.scholarshipId,
      transactionHash: event.transactionHash
    }))
    .filter((event) => !studentAddress || event.student.toLowerCase() === studentAddress.toLowerCase());

  return normalized.length ? normalized : "No disbursements found.";
}

function bindForms() {
  document.querySelector("#registerStudentForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const v = getFormValues(event.currentTarget);
    sendTransaction("Register student", (c) =>
      c.registerStudent(v.fullName, v.nationalId, v.university, v.program, toNumber(v.semesterYear, "Semester"), toNumber(v.cgpaX100, "CGPA"), toInt(v.annualIncomeX100, "Annual income"), v.ipfsDocumentHash)
    );
  });

  document.querySelector("#profileLookupForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const v = getFormValues(event.currentTarget);
    readContract("Student profile", async (c) => formatStudent(await c.students(v.student)));
  });

  document.querySelector("#eligibilityForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const v = getFormValues(event.currentTarget);
    readContract("Eligibility", () => checkEligibilityBasic(v.student, toInt(v.scholarshipId, "Scholarship ID")));
  });

  document.querySelector("#applyForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const v = getFormValues(event.currentTarget);
    sendTransaction("Apply for scholarship", (c) => c.applyForScholarship(toInt(v.scholarshipId, "Scholarship ID")));
  });

  document.querySelector("#studentDecisionForm").addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") return;
    event.preventDefault();
    const v = getFormValues(event.currentTarget);
    const action = event.target.dataset.action;
    const calls = {
      verify: (c) => c.verifyStudent(v.student),
      reject: (c) => c.rejectStudent(v.student, v.reason || "Rejected")
    };
    sendTransaction(`${action} student`, calls[action]);
  });

  document.querySelector("#createScholarshipForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const v = getFormValues(event.currentTarget);
    sendTransaction("Create scholarship", (c) =>
      c.createScholarship(
        v.name,
        v.description,
        toInt(v.maxRecipients, "Max recipients"),
        toNumber(v.minCgpaX100, "Minimum CGPA"),
        toInt(v.maxAnnualIncomeX100, "Max annual income"),
        toNumber(v.requiredSemester, "Required semester"),
        BigInt(deadlineToUnix(v.deadline)),
        { value: ethers.parseEther(v.ethAmount) }
      )
    );
  });

  document.querySelector("#scholarshipLookupForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const v = getFormValues(event.currentTarget);
    readContract("Scholarship details", async (c) => formatScholarship(await c.scholarships(toInt(v.scholarshipId, "Scholarship ID"))));
  });

  document.querySelector("#applicationDecisionForm").addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") return;
    event.preventDefault();
    const v = getFormValues(event.currentTarget);
    const action = event.target.dataset.action;
    sendTransaction(`${action} application`, (c) =>
      action === "approve"
        ? c.approveApplication(toInt(v.applicationId, "Application ID"), v.notes || "Approved")
        : c.rejectApplication(toInt(v.applicationId, "Application ID"), v.notes || "Rejected")
    );
  });

  document.querySelector("#applicationLookupForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const v = getFormValues(event.currentTarget);
    readContract("Application details", async (c) => formatApplication(await c.applications(toInt(v.applicationId, "Application ID"))));
  });

  document.querySelector("#paymentHistoryForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const v = getFormValues(event.currentTarget);
    readContract("Payment history", () => loadPaymentHistory(v.student.trim()));
  });

  document.querySelector("#loadRole").addEventListener("click", () => {
    loadRoleDashboard();
    showStatus("Role dashboard refreshed.");
  });

  document.querySelector("#loadStudents").addEventListener("click", () => readContract("Students", (c) => c.getAllStudents()));
  document.querySelector("#loadCounts").addEventListener("click", () => readContract("Counts", async (c) => {
    const [scholarships, applications] = await Promise.all([c.scholarshipCount(), c.applicationCount()]);
    return { scholarships, applications };
  }));
}
