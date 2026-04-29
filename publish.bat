@echo off
REM ============================================================================
REM publish.bat - NVIDIA CUDA Knowledge Base publish script
REM
REM Canonical workflow: edit markdown directly in content/, then run this script
REM to commit and push the latest wiki changes from the shared repo.
REM ============================================================================

setlocal

set "REPO=%~dp0"

echo.
echo === Using canonical repo workspace ===
echo Repo: %REPO%
echo.

cd /d "%REPO%"
if errorlevel 1 (
    echo ERROR: unable to enter repo directory.
    exit /b 1
)

echo === Git status ===
git status --short
if errorlevel 1 exit /b 1

echo.
echo === Staging changes ===
git add .
if errorlevel 1 exit /b 1

echo.
echo === Creating commit ===
git commit -m "Publish wiki %DATE% %TIME%"
if errorlevel 1 (
    echo No new commit created. This usually means there were no staged changes.
    exit /b 0
)

echo.
echo === Pushing to origin ===
git push origin main
if errorlevel 1 exit /b 1

echo.
echo Done.
endlocal
