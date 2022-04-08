import { useRouter } from 'next/router';
import { CSSProperties, FC } from 'react';
import { Items } from './Items';
import { PageCount, Wrapper } from './styles';

export const Pagination: FC<PaginProps> = (props) => {
	const { currentPage, totalPages, totalCount, ...rest } = props;
	const router = useRouter();
	/**
	 * Go to target pagination
	 * @param number
	 */
	const handlePage = (number: number) => {
		const { pathname, query: quaries } = router;

		if (String(number) === '1') {
			delete quaries.page;
		} else {
			quaries.page = String(number);
		}

		router.push({ pathname: pathname, query: { ...quaries } });
	};

	return (
		<Wrapper {...rest}>
			{totalPages > 1 && <Items current={currentPage} total={totalPages} onClick={handlePage} />}
			{totalCount > 0 && (
				<PageCount>
					Total {totalCount}
					{/* {`${currentPage - 1}1`}-{currentPage * dataPerPage} of {formatNumber(totalCount)} */}
				</PageCount>
			)}
		</Wrapper>
	);
};

export interface PaginProps {
	currentPage: number;
	totalPages: number;
	totalCount?: number;
	dataPerPage?: number;
	className?: string;
	style?: CSSProperties;
}

Pagination.defaultProps = {
	currentPage: 1,
	totalPages: 1,
	totalCount: 0,
};
