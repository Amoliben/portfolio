#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║                                                                ║${NC}"
echo -e "${BLUE}║              PUSH PORTFOLIO TO GITHUB - TERMINAL               ║${NC}"
echo -e "${BLUE}║                                                                ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Step 1: Get GitHub username
echo -e "${YELLOW}STEP 1: Enter your GitHub username${NC}"
read -p "GitHub username: " GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo -e "${RED}Error: GitHub username cannot be empty${NC}"
    exit 1
fi

GITHUB_URL="https://github.com/${GITHUB_USERNAME}/portfolio.git"

echo -e "${GREEN}✓ GitHub URL: ${GITHUB_URL}${NC}"
echo ""

# Step 2: Add remote
echo -e "${YELLOW}STEP 2: Adding GitHub remote...${NC}"
git remote add origin "$GITHUB_URL" 2>/dev/null || git remote set-url origin "$GITHUB_URL"
echo -e "${GREEN}✓ Remote added/updated${NC}"
echo ""

# Step 3: Rename branch
echo -e "${YELLOW}STEP 3: Renaming branch to main...${NC}"
git branch -m master main 2>/dev/null || true
echo -e "${GREEN}✓ Branch renamed${NC}"
echo ""

# Step 4: Push to GitHub
echo -e "${YELLOW}STEP 4: Pushing to GitHub...${NC}"
echo -e "${BLUE}Note: You'll be asked for your GitHub credentials${NC}"
echo -e "${BLUE}Use your Personal Access Token as password (not your GitHub password)${NC}"
echo -e "${BLUE}Get token from: https://github.com/settings/tokens${NC}"
echo ""

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}╔════════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║                                                                ║${NC}"
    echo -e "${GREEN}║                    ✅ SUCCESS! ✅                              ║${NC}"
    echo -e "${GREEN}║                                                                ║${NC}"
    echo -e "${GREEN}║  Your portfolio has been pushed to GitHub!                     ║${NC}"
    echo -e "${GREEN}║                                                                ║${NC}"
    echo -e "${GREEN}╚════════════════════════════════════════════════════════════════╝${NC}"
    echo ""
    echo -e "${BLUE}Your repository: https://github.com/${GITHUB_USERNAME}/portfolio${NC}"
    echo ""
    echo -e "${YELLOW}NEXT STEPS:${NC}"
    echo "1. Go to: https://vercel.com"
    echo "2. Click 'New Project'"
    echo "3. Select your GitHub repository"
    echo "4. Click 'Deploy'"
    echo "5. Your portfolio will be LIVE! 🚀"
else
    echo ""
    echo -e "${RED}Error: Failed to push to GitHub${NC}"
    echo "Make sure you:"
    echo "1. Have a GitHub account"
    echo "2. Created a repository named 'portfolio'"
    echo "3. Have a Personal Access Token (not your password)"
    exit 1
fi
