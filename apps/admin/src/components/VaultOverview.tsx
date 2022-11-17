import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  AddressDisplay,
  Card,
  H4,
  Link,
  ParXs,
  Theme,
  Bold,
  DataIndicator,
  widthQuery,
  Tag,
} from '@daohaus/ui';
import { formatValueTo, generateGnosisUiLink, Keychain } from '@daohaus/utils';

import { TDao } from '@daohaus/moloch-v3-context';
import { TransformedVault } from '@daohaus/moloch-v3-data';

const VaultOverviewCard = styled(Card)`
  background-color: ${({ theme }: { theme: Theme }) => theme.secondary.step3};
  border: none;
  padding: 3rem;
  width: 100%;
`;

const VaultCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 3rem;

  .safe-link {
    padding: 0.9rem;
    background-color: ${({ theme }: { theme: Theme }) => theme.secondary.step5};
    border-radius: 4px;
  }
`;

const DataGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-content: space-between;
  div {
    padding: 2rem 0;
    width: 19.7rem;

    @media ${widthQuery.sm} {
      min-width: 100%;
    }
  }
`;

const TagSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;
`;

type VaultOverviewProps = {
  dao: TDao;
  vault: TransformedVault;
};

export const VaultOverview = ({ dao, vault }: VaultOverviewProps) => {
  const { daochain } = useParams();
  const isTreasury = vault.safeAddress === dao.safeAddress;
  return (
    <VaultOverviewCard>
      <VaultCardHeader>
        <div>
          <H4>{vault.name}</H4>
          <TagSection>
            <AddressDisplay
              address={vault.safeAddress}
              truncate
              copy
              explorerNetworkId={daochain as keyof Keychain}
            />
            {isTreasury && <Tag tagColor="pink">Ragequittable</Tag>}
          </TagSection>
        </div>
        <div className="safe-link">
          <Link
            linkType="external"
            href={generateGnosisUiLink({
              chainId: daochain as keyof Keychain,
              address: vault.safeAddress,
            })}
          >
            <ParXs>
              <Bold>Gnosis Safe</Bold>
            </ParXs>
          </Link>
        </div>
      </VaultCardHeader>
      <DataGrid>
        <DataIndicator
          label="Balance"
          data={formatValueTo({
            value: vault.fiatTotal,
            decimals: 2,
            format: 'currencyShort',
          })}
        />
        <DataIndicator label="Tokens" data={vault.tokenBalances.length} />
      </DataGrid>
    </VaultOverviewCard>
  );
};
