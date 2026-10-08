/**
 * ============================================================================
 * 01 - NODE.JS FILE SYSTEM (fs) FUNDAMENTALS
 * ============================================================================
 * Run in terminal: node js_basics/11_nodejs_fundamentals/file_system.js
 * 
 * Key Concepts:
 * 1. Node.js built-in 'fs' (File System) module
 * 2. Callback-based operations vs Promise-based operations (fs.promises)
 * 3. writeFile(): Creates or overwrites files
 * 4. appendFile(): Appends data without deleting previous content
 * 5. readFile(): Reads file content as UTF-8 string or Buffer
 * 6. unlink(): Deletes files safely
 * ============================================================================
 */

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const targetFile = path.join(__dirname, "demo_output.txt");

console.log("==================================================");
console.log("▶ 1. ASYNC FILE OPERATIONS USING PROMISES (fs.promises)");
console.log("==================================================");

async function runFileOperations() {
    try {
        console.log(`[Step 1] Writing initial message to "${path.basename(targetFile)}"...`);
        await fsPromises.writeFile(targetFile, "Hello, Abinanthan! Welcome to Node.js backend.\n", "utf8");
        console.log("✔ File created and initial content saved.");

        console.log(`[Step 2] Appending additional log lines...`);
        await fsPromises.appendFile(targetFile, `Log entry timestamp: ${new Date().toISOString()}\n`, "utf8");
        await fsPromises.appendFile(targetFile, `Node.js Version: ${process.version}\n`, "utf8");
        console.log("✔ Additional lines appended.");

        console.log(`[Step 3] Reading file back from disk...`);
        const fileContent = await fsPromises.readFile(targetFile, "utf8");
        console.log("\n--- File Content on Disk ---");
        console.log(fileContent.trim());
        console.log("----------------------------\n");

        console.log(`[Step 4] Cleaning up demo file...`);
        await fsPromises.unlink(targetFile);
        console.log("✔ Cleanup complete (temporary file deleted).");

        console.log("\n==================================================");
        console.log("▶ 2. LEGACY CALLBACK PATTERN PREVIEW");
        console.log("==================================================");
        console.log("💡 The legacy pattern uses: fs.writeFile(path, data, (err) => { ... })");
        console.log("💡 Modern Node.js code preferentially uses fs.promises with async/await.");
        console.log("\n✔ Node.js File System demonstration completed successfully.");
    } catch (error) {
        console.error("❌ File system operation error:", error);
    }
}

runFileOperations();
