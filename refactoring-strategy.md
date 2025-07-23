# リファクタリング戦略

## 概要
Next.js 15プロジェクトの包括的なリファクタリング計画。未使用コードの削除、重複の解消、型安全性の向上を目指す。

## 現状分析

### プロジェクト構造
- **フレームワーク**: Next.js 15.2.4 (App Router)
- **スタイリング**: Tailwind CSS + shadcn/ui
- **主要ページ**: Home, Members, Businesses
- **削除済みページ**: About, Contact, Services

### 主要な問題点
1. **未使用コード**: shadcn/uiコンポーネント45個、header.tsx等
2. **重複ファイル**: use-toast.ts、use-mobile.tsx、フォントファイル
3. **型定義不足**: page.tsxのレイヤーオブジェクト
4. **外部依存**: Wikipediaの画像URL
5. **不適切な命名**: package.json "my-v0-project"

## リファクタリング計画

### フェーズ1: クリーンアップ（優先度：高）

#### 1.1 Zone.Identifierファイルの一括削除
```bash
find . -name "*:Zone.Identifier" -type f -delete
```

#### 1.2 未使用shadcn/uiコンポーネントの削除
**保持するコンポーネント**:
- button.tsx
- toast.tsx
- toaster.tsx
- use-toast.ts

**削除対象**: 残り45個のコンポーネント

#### 1.3 未使用ファイルの削除
- `components/header.tsx`
- `components/theme-provider.tsx`
- `public/HOT-Tenshokk-M.otf` (ルートに既存)

#### 1.4 重複ファイルの統合
- `hooks/use-toast.ts` を削除（components/ui/use-toast.ts を使用）
- `hooks/use-mobile.tsx` と `components/ui/use-mobile.tsx` を削除（未使用）
- `styles/globals.css` を削除（app/globals.css を使用）

### フェーズ2: コード品質改善（優先度：中）

#### 2.1 SVGアイコンのコンポーネント化
```typescript
// components/icons/menu-icon.tsx
export const MenuIcon = () => (
  <svg>...</svg>
)
```

#### 2.2 型定義の追加
```typescript
// app/page.tsx
interface Layer {
  style: React.CSSProperties;
  className?: string;
}

const layers: Layer[] = [...]
```

#### 2.3 未使用変数の削除
- `filmGrainLayer` の削除（page.tsx）

### フェーズ3: 最適化（優先度：低）

#### 3.1 外部画像のローカル化
- Wikipedia画像をダウンロードし、public/imagesに配置
- 画像の最適化（next/imageの使用検討）

#### 3.2 プロジェクト設定の更新
```json
// package.json
{
  "name": "homepage",
  "version": "1.0.0",
  ...
}
```

#### 3.3 未使用CSS変数の削除
- chart-1〜5
- sidebar関連の未使用変数

## 実行順序

1. **バックアップ作成**（git commit前の状態を保存）
2. **フェーズ1実行**（クリーンアップ）
   - 動作確認
   - ビルドテスト
3. **フェーズ2実行**（コード品質改善）
   - 型チェック
   - Lintチェック
4. **フェーズ3実行**（最適化）
   - パフォーマンステスト
   - 最終確認

## 期待される成果

- **バンドルサイズ削減**: 約60-70%（未使用コンポーネント削除による）
- **メンテナンス性向上**: 型安全性、コード整理
- **パフォーマンス改善**: 外部リソースの削減
- **開発体験向上**: 明確なプロジェクト構造

## 注意事項

- 各フェーズ後に必ず動作確認を実施
- git commitは明示的な指示があるまで実行しない
- 削除前に依存関係を再確認
- CSSの削除は慎重に（グローバルスタイルへの影響を確認）

## コマンド一覧

```bash
# ビルドテスト
npm run build

# 型チェック（設定されている場合）
npm run typecheck

# Lintチェック（設定されている場合）
npm run lint

# 開発サーバー起動（動作確認用）
npm run dev
```