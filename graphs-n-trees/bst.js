class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insert a value into the BST
    insert(value) {
        const newNode = new Node(value);

        // If the tree is empty
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let current = this.root;

        while (true) {
            // Smaller values go left
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return;
                }

                current = current.left;
            }

            // Larger values go right
            else if (value > current.value) {
                if (current.right === null) {
                    current.right = newNode;
                    return;
                }

                current = current.right;
            }

            // Ignore duplicate values
            else {
                return;
            }
        }
    }


    // Search for a value
    search(target) {
        let current = this.root;
        let comparisons = 0;

        while (current !== null) {
            comparisons++;

            console.log(
                `Comparison ${comparisons}: ${current.value} === ${target}`
            );

            // Found the target
            if (current.value === target) {
                console.log(`Found ${target}`);
                console.log(`Total comparisons: ${comparisons}`);

                return {
                    found: true,
                    comparisons: comparisons
                };
            }

            // Target is smaller → go left
            if (target < current.value) {
                console.log(
                    `${target} < ${current.value} → go left`
                );

                current = current.left;
            }

            // Target is larger → go right
            else {
                console.log(
                    `${target} > ${current.value} → go right`
                );

                current = current.right;
            }
        }

        console.log(`${target} was not found`);
        console.log(`Total comparisons: ${comparisons}`);

        return {
            found: false,
            comparisons: comparisons
        };
    }
}


// Create our BST
const bst = new BinarySearchTree();

bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);


// Search for 60
console.log("\nSearching for 60:");

const result = bst.search(60);

console.log("Result:", result);
