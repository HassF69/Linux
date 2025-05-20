import os
import re
import pexpect
import time

script_dir = os.path.dirname(os.path.abspath(__file__))
prompt_file_path = os.path.join(script_dir, "p", "p.txt")
output_dir = os.path.join(script_dir, "s")

preprompts = {
    0: "Give me just the code solutions without explanation, DO NOT SAY HERE'S THE CODE OR ANYTHING NO WORDS BUT THE SOLUTION",
    1: "Correct this code and give the corrected version only, no explanation, just the corrected code",
    2: "Some garbage preprompt that does nothing useful"
}

def run_tgpt_and_extract_exercises(prompt_file_path, output_dir):
    choice = 0  # Change this to 1 or 2 if you want to use another preprompt
    preprompt = preprompts.get(choice, preprompts[0])

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    try:
        with open(prompt_file_path, "r") as f:
            prompt_content = f.read()
    except:
        return

    try:
        child = pexpect.spawn('tgpt -m', encoding='utf-8')
        child.timeout = 30
        child.maxread = 1000000
        child.sendline(preprompt)
        time.sleep(1)
        child.sendline(prompt_content)
        time.sleep(1)
        child.sendcontrol('d')

        try:
            child.expect('╭─ Bot', timeout=60)
            full_output = child.before + '╭─ Bot'
            time.sleep(30)

            try:
                child.expect(pexpect.EOF, timeout=5)
                full_output += child.before
            except (pexpect.TIMEOUT, pexpect.EOF):
                full_output += child.before

            stdout_data = full_output
        except pexpect.exceptions.TIMEOUT:
            stdout_data = child.before

        try:
            child.terminate(force=True)
        except:
            pass
    except (pexpect.exceptions.EOF, pexpect.exceptions.TIMEOUT, Exception):
        return

    extract_and_save_solutions(stdout_data, output_dir)

def extract_and_save_solutions(text, output_dir):
    ansi_escape = re.compile(r'\x1B(?:[@-Z\\-_]|\[[0-?]*[ -/]*[@-~])')
    text = ansi_escape.sub('', text)
    bot_section = re.search(r'╭─ Bot(.*?)(?=Enter your prompt|$)', text, re.DOTALL)

    if bot_section:
        content = bot_section.group(1).strip()
        filename = "exo.txt"
        filepath = os.path.join(output_dir, filename)

        try:
            with open(filepath, "w") as f:
                f.write(content)
        except:
            pass

if __name__ == "__main__":
    run_tgpt_and_extract_exercises(prompt_file_path, output_dir)
