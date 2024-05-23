const fs = require('fs');
const env = 'env.json'

/**
 * 指定されたファイルに文字列が含まれているかを判定する関数
 * @param {string} filePath - 検索対象のファイルパス
 * @param {string} searchString - 検索する文字列
 * @returns {boolean} - 文字列が含まれている場合はtrue、含まれていない場合はfalse
 */
function containsString(filePath, searchString) {
    try {
        // ファイルを読み込む
        const fileContent = fs.readFileSync(filePath, 'utf8');
        
        // ファイルの内容に検索文字列が含まれているかを判定
        return fileContent.includes(searchString);
    } catch (err) {
        console.error('ファイルの読み込み中にエラーが発生しました:', err);
        return false;
    }
}

// 使用例
const filePath = env.TEXT_DIRECTORY_PATH;  // 調査対象のファイルパス
const searchString = '検索する文字列';

const result = containsString(filePath, searchString);
console.log(`ファイルに"${searchString}"が含まれているか:`, result);
