const chalk = require('chalk');
chalk.enabled = true;
chalk.level = 2;
const fs = require('fs-extra');
const msgPath = process.env.GIT_PARAMS;
const msg = fs.readFileSync(msgPath, 'utf-8').trim();

const commitRE = /^(revert: )?(feat|fix|polish|docs|style|refactor|perf|test|workflow|ci|chore|types|build)(\(.+\))?: .{1,50}/;

if (!commitRE.test(msg)) {
  console.log();
  console.log(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(`非法的 commit 消息提交格式.`)}\n\n` +
      chalk.red(`  自动生成变更日志需要正确的提交消息格式。示例:\n\n`) +
      `    ${chalk.green(`feat(log): integration logger feature`)}\n` +
      `    ${chalk.green(`fix(axios-request): fix axios request`)}\n\n` +
      chalk.red(`  详情请查看 git commit 提交规范 /git-commit-style.md\n`),
  );
  process.exit(1);
}
