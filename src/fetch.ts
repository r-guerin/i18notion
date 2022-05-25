import { Client } from '@notionhq/client';

export type NotionBlock = {
  table_row: {
    cells: Array<{
      plain_text: string;
    }>[];
  };
};

export const fetchTableRows = async (client: Client, blockId: string): Promise<string[][]> => {
  const { results } = await client.blocks.children.list({ block_id: blockId });
  return (results as unknown as NotionBlock[]).map((res) => res.table_row.cells.flat().map((cell) => cell.plain_text));
};
