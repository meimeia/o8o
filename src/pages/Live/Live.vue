<template>
	<div>
		<Header :title="'直播'"></Header>
		<el-row class="livePage">
			<el-card>
				<el-row type="flex" align="middle">
					<el-col :span="10" class="topLeft">
						<el-input placeholder="" v-model="search">
							<template slot="append">
								<el-button @click="handleClik('搜索')">搜索</el-button>
							</template>
						</el-input>
					</el-col>
					<el-col :span="14" class="topRight">
						<el-col :span="16" class="nav font-size-large">
							<span @click="handleClik('我的直播间')">我的直播间</span>
							<span @click="handleClik('历史')">历史</span>
							<span @click="handleClik('充值')">充值</span>
						</el-col>
						<el-col :span="8" class="down">
							<el-row class="download" @click.native="handleClik('下载')">
								<div style="width:0.5rem;height:0.5rem;">
									<img src="../../assets/imgs/download.png" style="width:100%;height: 100%; " />
								</div>
								<el-row>下载</el-row>
							</el-row>
						</el-col>
					</el-col>
				</el-row>
				<el-divider></el-divider>
				<el-row class="font-size-large subNav">
					<el-row>全部分类</el-row>
					<el-row class="line"></el-row>
					<el-row class="subNav-list" @click.native="handleClik('热门直播')">热门直播</el-row>
					<el-row class="subNav-list" @click.native="handleClik('直播预告')">直播预告</el-row>
					<el-row class="subNav-list" @click.native="handleClik('精彩回放')">精彩回放</el-row>
					<el-row class="subNav-list" @click.native="handleClik('转播市场')">转播市场</el-row>
				</el-row>
			</el-card>
			<el-row type="flex" justify="space-around" align="middle" style="flex-wrap: wrap;margin-top: 20px;">
				<el-row v-for="(item, index) in liveList" :key="index" class="liveList">
					<el-row class="liveSrc">

					</el-row>
					<el-row>
						<el-row type="flex">
							<el-row class="userFace">
								<img src="../../assets/imgs/u366.png" alt="" style="width:0.5rem;height:0.5rem;">
							</el-row>
							<el-row class="userInfo font-size-large">
								<el-row class="liveTitle">{{item.liveTitle}}</el-row>
								<el-row class="userName">{{item.userName}}</el-row>
							</el-row>
						</el-row>
						<el-row type="flex" justify="space-between" align="middle" class="liveElse">
							<el-row type="flex" align="middle">
								<img src="../../assets/imgs/u372.png" alt="" style="width:0.2rem;height:0.2rem;">
								<span class="font-size-small">{{item.looks}}</span>
							</el-row>
							<el-row type="flex">
								<img src="../../assets/imgs/u374.png" alt="" style="width:0.25rem;height:0.2rem;">
								<img src="../../assets/imgs/u370.png" alt="" style="width:0.25rem;height:0.2rem;margin-left: 0.2rem;">
							</el-row>
						</el-row>
					</el-row>
				</el-row>
			</el-row>
			<el-pagination style="text-align: center; margin-top: .2rem;font-size: 20px; padding: 20px 0;" background @size-change="handleSizeChange"
			 @current-change="handleCurrentChange" :current-page="1" :page-size="20" layout="prev, pager, next, jumper"
			 :total="400">
			</el-pagination>
		</el-row>
	</div>
</template>

<script>
	import Header from '../../components/Header/Header'

	export default {
		name: 'Live',
		components: {
			Header
		},
		data() {
			return {
				search: '',
				liveList: [{
						liveSrc: '',
						liveTitle: '直播标题限制12个字',
						userFace: '',
						userName: '主播名称',
						looks: 10000290
					},
					{
						liveSrc: '',
						liveTitle: '直播标题限制12个字',
						userFace: '',
						userName: '主播名称',
						looks: 10000290
					},
					{
						liveSrc: '',
						liveTitle: '直播标题限制12个字',
						userFace: '',
						userName: '主播名称',
						looks: 10000290
					},
					{
						liveSrc: '',
						liveTitle: '直播标题限制12个字',
						userFace: '',
						userName: '主播名称',
						looks: 10000290
					},
					{
						liveSrc: '',
						liveTitle: '直播标题限制12个字',
						userFace: '',
						userName: '主播名称',
						looks: 10000290
					},
					{
						liveSrc: '',
						liveTitle: '直播标题限制12个字',
						userFace: '',
						userName: '主播名称',
						looks: 10000290
					},
					{
						liveSrc: '',
						liveTitle: '直播标题限制12个字',
						userFace: '',
						userName: '主播名称',
						looks: 10000290
					},
					{
						liveSrc: '',
						liveTitle: '直播标题限制12个字',
						userFace: '',
						userName: '主播名称',
						looks: 10000290
					},
					{
						liveSrc: '',
						liveTitle: '直播标题限制12个字',
						userFace: '',
						userName: '主播名称',
						looks: 10000290
					},
					{
						liveSrc: '',
						liveTitle: '直播标题限制12个字',
						userFace: '',
						userName: '主播名称',
						looks: 10000290
					},
					{
						liveSrc: '',
						liveTitle: '直播标题限制12个字',
						userFace: '',
						userName: '主播名称',
						looks: 10000290
					},
					{
						liveSrc: '',
						liveTitle: '直播标题限制12个字',
						userFace: '',
						userName: '主播名称',
						looks: 10000290
					},
					{
						liveSrc: '',
						liveTitle: '直播标题限制12个字',
						userFace: '',
						userName: '主播名称',
						looks: 10000290
					},
					{
						liveSrc: '',
						liveTitle: '直播标题限制12个字',
						userFace: '',
						userName: '主播名称',
						looks: 10000290
					},
					{
						liveSrc: '',
						liveTitle: '直播标题限制12个字',
						userFace: '',
						userName: '主播名称',
						looks: 10000290
					},
					{
						liveSrc: '',
						liveTitle: '直播标题限制12个字',
						userFace: '',
						userName: '主播名称',
						looks: 10000290
					},
					{
						liveSrc: '',
						liveTitle: '直播标题限制12个字',
						userFace: '',
						userName: '主播名称',
						looks: 10000290
					},
					{
						liveSrc: '',
						liveTitle: '直播标题限制12个字',
						userFace: '',
						userName: '主播名称',
						looks: 10000290
					},
					{
						liveSrc: '',
						liveTitle: '直播标题限制12个字',
						userFace: '',
						userName: '主播名称',
						looks: 10000290
					},
					{
						liveSrc: '',
						liveTitle: '直播标题限制12个字',
						userFace: '',
						userName: '主播名称',
						looks: 10000290
					}
				]
			}
		},
		methods: {
			handleClik(e) {
				console.log('eeee', e)
				this.$message.success('您点击了' + e)
			},
			handleSizeChange() {

			},
			handleCurrentChange() {

			},
		}
	}
</script>

<style lang="scss">
	.livePage {
		width: 80%;
		margin: 0 auto;
		padding-top: 30px;

		.color-3 {
			color: #333333;
		}

		.font-size-large {
			font-size: 18px;
		}

		.font-size-medium {
			font-size: 16px;
		}

		.font-size-small {
			font-size: 14px;
		}

		.font-size-mini {
			font-size: 12px;
		}

		.el-card__body {
			padding: 20px 0;
		}

		.topLeft {
			padding-left: 40px;
		}

		.topRight {
			display: flex;
			padding-right: 40px;

			.nav {
				display: flex;
				justify-content: space-around;
				align-items: center;
				font-weight: bold;

				span {
					cursor: pointer;

					&:hover {
						color: #3097ee;
					}
				}
			}

			.down {
				display: flex;
				justify-content: center;

				.download {
					cursor: pointer;

					&:hover {
						color: #3097ee;
					}
				}
			}
		}

		.subNav {
			display: flex;
			justify-content: space-around;
			align-items: center;
			font-size: 18px;
			color: #333333;
			font-weight: bold;

			.line {
				height: .5rem;
				magin: 0;
			}

			.subNav-list {
				cursor: pointer;

				&:hover {
					color: #3097ee;
				}
			}
		}

		.liveList {
			border: 1px solid #ccc;
			width: 3rem;
			margin: 10px;

			.liveSrc {
				height: 2.5rem;
				background: #ccc;
			}

			.userFace {
				padding: 10px;
			}

			.userInfo {
				margin-left: .25rem;
				padding: 10px;
			}

			.liveElse {
				border-top: 1px solid #333333;
				padding: 5px 20px;
			}
		}
	}
</style>
