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

function bindForms() {
  document.querySelector("#registerStudentForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const v = getFormValues(event.currentTarget);
    sendTransaction("Register student", (c) =>
      c.registerStudent(v.fullName, v.nationalId, v.university, v.program, toNumber(v.semesterYear, "Semester"), toNumber(v.cgpaX100, "CGPA"), toInt(v.annualIncomeX100, "Annual income"), v.ipfsDocumentHash)
    );
  });

  document.querySelector("#updateStudentForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const v = getFormValues(event.currentTarget);
    sendTransaction("Update student profile", (c) =>
      c.updateStudentProfile(v.university, v.program, toNumber(v.semesterYear, "Semester"), toNumber(v.cgpaX100, "CGPA"), toInt(v.annualIncomeX100, "Annual income"), v.ipfsDocumentHash)
    );
  });

  document.querySelector("#eligibilityForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const v = getFormValues(event.currentTarget);
    readContract("Eligibility", (c) => c.checkEligibility(v.student, toInt(v.scholarshipId, "Scholarship ID")));
  });

  document.querySelector("#applyForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const v = getFormValues(event.currentTarget);
    sendTransaction("Apply for scholarship", (c) => c.applyForScholarship(toInt(v.scholarshipId, "Scholarship ID")));
  });

  document.querySelector("#adminForm").addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") return;
    event.preventDefault();
    const v = getFormValues(event.currentTarget);
    const action = event.target.dataset.action;
    sendTransaction(action === "add" ? "Add admin" : "Remove admin", (c) => action === "add" ? c.addAdmin(v.admin) : c.removeAdmin(v.admin));
  });

  document.querySelector("#studentDecisionForm").addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") return;
    event.preventDefault();
    const v = getFormValues(event.currentTarget);
    const action = event.target.dataset.action;
    const calls = {
      verify: (c) => c.verifyStudent(v.student),
      reject: (c) => c.rejectStudent(v.student, v.reason || "Rejected"),
      blacklist: (c) => c.blacklistStudent(v.student, v.reason || "Blacklisted")
    };
    sendTransaction(`${action} student`, calls[action]);
  });

  document.querySelector("#ownerForm").addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") return;
    event.preventDefault();
    const v = getFormValues(event.currentTarget);
    const action = event.target.dataset.action;
    const calls = {
      transfer: (c) => c.transferOwnership(v.newOwner),
      fee: (c) => c.updatePlatformFee(toInt(v.feeBps, "Fee bps")),
      withdraw: (c) => c.withdrawFees()
    };
    sendTransaction(`Owner ${action}`, calls[action]);
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
        toInt(v.tranches, "Tranches"),
        { value: ethers.parseEther(v.ethAmount) }
      )
    );
  });

  document.querySelector("#fundScholarshipForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const v = getFormValues(event.currentTarget);
    sendTransaction("Fund scholarship", (c) => c.fundScholarship(toInt(v.scholarshipId, "Scholarship ID"), { value: ethers.parseEther(v.ethAmount) }));
  });

  document.querySelector("#statusScholarshipForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const v = getFormValues(event.currentTarget);
    sendTransaction("Change scholarship status", (c) => c.setScholarshipStatus(toInt(v.scholarshipId, "Scholarship ID"), toNumber(v.status, "Status")));
  });

  document.querySelector("#scholarshipLookupForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const v = getFormValues(event.currentTarget);
    readContract("Scholarship details", async (c) => ({
      details: await c.scholarships(toInt(v.scholarshipId, "Scholarship ID")),
      availableBalanceWei: await c.getScholarshipAvailableBalance(toInt(v.scholarshipId, "Scholarship ID"))
    }));
  });

  document.querySelector("#reviewForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const v = getFormValues(event.currentTarget);
    sendTransaction("Mark under review", (c) => c.markUnderReview(toInt(v.applicationId, "Application ID")));
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

  document.querySelector("#releaseForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const v = getFormValues(event.currentTarget);
    sendTransaction("Release tranche", (c) => c.releaseNextTranche(toInt(v.applicationId, "Application ID")));
  });

  document.querySelector("#studentApplicationsForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const v = getFormValues(event.currentTarget);
    readContract("Student applications", (c) => c.getStudentApplications(v.student));
  });

  document.querySelector("#scholarshipApplicationsForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const v = getFormValues(event.currentTarget);
    readContract("Scholarship applications", (c) => c.getScholarshipApplications(toInt(v.scholarshipId, "Scholarship ID")));
  });

  document.querySelector("#paymentHistoryForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const v = getFormValues(event.currentTarget);
    readContract("Payment history", (c) => c.getStudentPaymentHistory(v.student));
  });

  document.querySelector("#transactionRangeForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const v = getFormValues(event.currentTarget);
    readContract("Transaction range", (c) => c.getTransactions(toInt(v.from, "From"), toInt(v.to, "To")));
  });

  document.querySelector("#loadAdmins").addEventListener("click", () => readContract("Admins", (c) => c.getAllAdmins()));
  document.querySelector("#loadStudents").addEventListener("click", () => readContract("Students", (c) => c.getAllStudents()));
  document.querySelector("#loadTxCount").addEventListener("click", () => readContract("Transaction count", (c) => c.getTransactionCount()));
  document.querySelector("#loadBalance").addEventListener("click", () => readContract("Contract balance", async (c) => {
    const wei = await c.getContractBalance();
    return { wei, formatted: ethers.formatEther(wei) };
  }));
}
