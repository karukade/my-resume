import { StateType } from "../app/type"
import { markDownToHtml } from "~/utils/remark"

// TODO renderMarkupする前にmarkdownのテキストをhtmlの文字列に変換してるのなんとかしたい。
// input setStateのときにhtmlに変換する？
export const transformState = async (state: StateType): Promise<StateType> => {
  const worksPromise = Promise.all(
    state.worksVitae.works.map(async (work) => {
      return {
        ...work,
        charge: await markDownToHtml(work.charge),
        tool: await markDownToHtml(work.tool),
      }
    })
  )

  const overviewPromise = markDownToHtml(state.overview.overview)

  const prPromise = markDownToHtml(state.pr.pr)

  const skillSetsPromise = Promise.all(
    state.skillSet.skillSets.map(async ({ overview, ...rest }) => ({
      ...rest,
      overview: await markDownToHtml(overview),
    }))
  )

  const [works, overview, pr, skillSets] = await Promise.all([
    worksPromise,
    overviewPromise,
    prPromise,
    skillSetsPromise,
  ])

  return {
    ...state,
    overview: {
      overview,
    },
    worksVitae: {
      ...state.worksVitae,
      works,
    },
    skillSet: {
      skillSets,
    },
    pr: {
      pr,
    },
  }
}
