# Score Generator Readme

## How this score generator works

This score generator is based on the system defined in [this article](link-to-article).

### Overview

This score generator assigns points based on the difficulty of solving categories in a specific order. The goal is to solve categories from the most difficult to the easiest. You have 4 guesses to earn points, and any guesses beyond that result in zero points.

### Example:

If you solve the categories in the order provided below:

1. 🟪🟪🟪🟪 (16 points) - 4 points for purple x 4 points for solving on the 1st line
2. 🟦🟦🟦🟦 (9 points) - 3 points for blue x 3 points for solving on the 2nd line
3. 🟩🟩🟩🟩 (4 points) - 2 points for green x 2 points for solving on the 3rd line
4. 🟨🟨🟨🟨 (1 point) - 1 point for orange x 1 point for solving on the 4th line

**Total: 30 points** - This is the best possible score.

### Example 2:

If you solve all categories but not from hardest to easiest:

1. 🟨🟨🟨🟨 (4 points) - 1 point for orange x 4 points for solving on the 1st line
2. 🟩🟩🟩🟩 (6 points) - 2 points for green x 3 points for solving on the 2nd line
3. 🟪🟪🟪🟪 (8 points) - 4 points for purple x 2 points for solving on the 3rd line
4. 🟦🟦🟦🟦 (3 points) - 3 points for blue x 1 point for solving on the 4th line

**Total: 21 points**

### Example 3:

If you miss one:

1. 🟨🟨🟨🟨 (4 points) - 1 point for orange x 4 points for solving on the 1st line
2. 🟩🟩🟪🟩 (0 points) - This used one of the 4 chances you have to earn points
3. 🟪🟪🟪🟪 (8 points) - 4 points for purple x 2 points for solving on the 3rd line
4. 🟦🟦🟦🟦 (3 points) - 3 points for blue x 1 point for solving on the 4th line
5. 🟩🟩🟩🟩 (0 points) - You don't receive any points for solving after the 4th line

**Total: 15 points**

Check out the article linked above for more information about this scoring system. This tool is built to utilize the scoring system described in the article.
